import { type Abi, type Log, parseAbiItem } from 'viem'
import type { EvmClient } from '#/clients/viem/index'
import { env } from '#/env'
import { logger } from '#/logger'
import { type Event, compareEvents, createEventSignature, decodeLogtoEvent } from '#/pubsub/event'
import type { EventSubscriber } from '#/pubsub/subscriber/interface'
import { raise, sleep } from '#/utilities'
import type { EventPublisher } from './interface'

/**
 * Concrete implementation of EventPublisher for handling contract events.
 */
export class ContractEventPublisher implements EventPublisher {
  private subscribers: EventSubscriber[] = []
  private unwatch: () => void = () => {}

  /**
   * Creates an instance of ContractEventPublisher.
   * @param client - The PublicClient used to interact with the blockchain.
   * @param chainId - The chain ID of the blockchain.
   * @param contractName - The name of the contract.
   * @param abi - The ABI of the contract.
   * @param address - The Ethereum address of the contract.
   */
  constructor(
    private client: EvmClient,
    public readonly chainId: bigint,
    public readonly contractName: string,
    public readonly abi: Abi,
    public readonly address: `0x${string}`
  ) {
    this.unwatch = () => {
      logger.warn('ContractEventPublisher unwatch function not yet implemented')
    }
  }

  /**
   * Subscribes an EventSubscriber to this publisher.
   * Checks if the subscriber is a ContractEventSubscriber with a matching address.
   * @param subscriber - The EventSubscriber to subscribe.
   * @throws Will throw an error if the subscriber's address does not match the publisher's address.
   */
  subscribe(subscriber: EventSubscriber): EventPublisher {
    this.subscribers.push(subscriber)
    return this
  }

  /**
   * Unsubscribes an EventSubscriber from this publisher.
   * @param subscriber - The EventSubscriber to unsubscribe.
   */
  unsubscribe(subscriber: EventSubscriber): EventPublisher {
    this.subscribers = this.subscribers.filter(existingSubscriber => existingSubscriber !== subscriber)
    return this
  }

  private async fetchHistoricalEvents(fromBlock: bigint, toBlock: bigint): Promise<void> {
    const eventSignatures: string[] = this.abi
      .filter((item: any) => item.type === 'event')
      .map((item: any) => createEventSignature(item))
    let i = 0
    const logs: Log[] = []
    for (const eventSignature of eventSignatures) {
      await sleep(500)
      console.log(
        `Fetching historical logs for ${this.contractName} ${eventSignature} (${++i}/${eventSignatures.length})`
      )
      try {
        const eventLogs = await this.client.getLogs({
          event: parseAbiItem(eventSignature) as any,
          address: this.address,
          fromBlock,
          toBlock
        })
        console.log(
          `Fetched ${eventLogs.length} log${
            eventLogs.length === 1 ? '' : 's'
          } from block ${fromBlock} to ${toBlock} for ${this.contractName} ${eventSignature}`
        )
        for (const log of eventLogs) {
          logs.push(log)
        }
      } catch (error) {
        logger.error(`Error fetching historical logs for ${this.contractName}:`, error)
        throw error
      }
    }

    await this.processLogs(logs)
  }

  private async processLogs(logs: Log[]): Promise<void> {
    console.log(`Sorting ${logs.length} log${logs.length === 1 ? '' : 's'} for ${this.contractName}`)
    logs.sort(compareEvents)
    console.log(
      `Processing ${logs.length.toLocaleString()} log${logs.length === 1 ? '' : 's'} for ${this.contractName}`
    )

    const events: Event[] = this.#decodeLogs(logs)
    for (let i = 0; i < events.length; i++) {
      const event: Event = events[i] as Event
      for (const subscriber of this.subscribers) {
        await subscriber.onEvent(event)
      }
      if (i % 1000 === 0) {
        logger.info(
          `${
            this.contractName
          } event publisher published ${i.toLocaleString()}/${logs.length.toLocaleString()} logs for ${
            this.contractName
          }`
        )
      }
    }
    logger.info(`Processed ${logs.length.toLocaleString()} logs for ${this.contractName}`)
  }

  #decodeLogs(logs: Log[]): Event[] {
    const events: Event[] = []
    for (let i = 0; i < logs.length; i++) {
      events.push(decodeLogtoEvent(this.chainId, this.contractName, this.abi, logs[i] as Log))
      if (i % 1000 === 0) {
        logger.info(`Decoded ${i.toLocaleString()}/${logs.length.toLocaleString()} logs for ${this.contractName}`)
      }
    }
    logger.info(`Decoded ${logs.length.toLocaleString()} logs for ${this.contractName}`)
    return events
  }

  /**
   * Starts the event listening process.
   * It sets up a listener for contract events and dispatches them to all subscribers.
   */
  async start(): Promise<void> {
    if (env.RECOVER_HISTORY === 'true') {
      // Fetch and process historical events
      const latestBlock = await this.client.getBlockNumber()
      const batchSize = 10000n
      for (let fromBlock = BigInt(env.START_BLOCK); fromBlock <= latestBlock; fromBlock += batchSize) {
        const toBlock = fromBlock + batchSize - 1n
        logger.info(`Fetching historical events for ${this.contractName} from block ${fromBlock} to ${toBlock}`)
        await this.fetchHistoricalEvents(fromBlock, toBlock)
      }
    }

    // This Action will batch up all the event logs found within the pollingInterval, and invoke them via onLogs.
    this.unwatch = this.client.watchContractEvent({
      abi: this.abi,
      address: this.address,
      onLogs: logs =>
        this.processLogs(logs).catch(error => {
          logger.error(`Error processing logs for ${this.contractName}:`, error)
          raise(error) // Assuming raise is a custom error handling function
        }),
      onError: error => {
        logger.error(`${this.contractName} error:`, error)
        raise(error)
      },
      // Default: false for WebSocket Clients, true for non-WebSocket Clients
      poll: undefined
      // Default: 1000
      // pollingInterval: 1000,
    })
  }

  /**
   * Stops the event listening process.
   * It disconnects the event listener and resets the unwatch function.
   */
  stop(): void {
    logger.log(`Stopping ${this.contractName} (${this.address}) event publisher`)
    this.unwatch()
    this.unwatch = () => {}
  }
}
