import { database } from '#/database'
import { logger } from '#/logger'
import type { Event } from '#/pubsub/event'
import type { EventSubscriber } from './interface'

export class EventUploader implements EventSubscriber {
  async onEvent(event: Event): Promise<void> {
    await this.onEvents([event])
    const rows = [EventUploader.#toTableRow(event)]
    const result = await database.insertInto('events').values(rows).executeTakeFirst()
    if (result.numInsertedOrUpdatedRows !== 1n) {
      logger.error(`Failed to insert event ${JSON.stringify(event)}`)
    }
  }

  // async onEvents(events: Event[]): Promise<void> {
  //   if (events.length > 1) {
  //     logger.info(`⏳ Uploading ${events.length} events`)
  //   }

  //   // Log event details before processing
  //   for (const event of events) {
  //     logger.info(
  //       `📌 ${event.contractAddress} ${event.eventParameters.eventName}(${Object.values(
  //         event.eventParameters.args
  //       ).join(', ')})`
  //     )
  //   }
  //   logger.info(`⏳ ========= Uploading ${events.length} events`)

  //   let rows: any[] = []
  //   try {
  //     // Map events to table rows
  //     rows = events.map(event => {
  //       try {
  //         return EventUploader.#toTableRow(event)
  //       } catch (error: unknown) {
  //         if (error instanceof Error) {
  //           logger.error(`Failed to map event ${JSON.stringify(event)}: ${error.message}`)
  //         } else {
  //           logger.error(`Failed to map event ${JSON.stringify(event)}: Unknown error`)
  //         }
  //         throw error // Re-throw to propagate the error
  //       }
  //     })
  //   } catch (error: unknown) {
  //     if (error instanceof Error) {
  //       logger.error(`Error mapping events: ${error.message}`)
  //     } else {
  //       logger.error(`Error mapping events: Unknown error`)
  //     }
  //     return // Return early if there's a mapping error
  //   }

  //   try {
  //     // Insert events into the database
  //     const result = await database.insertInto('events').values(rows).executeTakeFirst()

  //     if (result.numInsertedOrUpdatedRows !== BigInt(events.length)) {
  //       logger.error(`Failed to insert events ${JSON.stringify(events)}`)
  //     } else {
  //       logger.info(`✅ Uploaded ${events.length} events`)
  //     }
  //   } catch (error: unknown) {
  //     // Database operation error
  //     if (error instanceof Error) {
  //       logger.error(`Error inserting events into the database: ${error.message}`)
  //       logger.error(`Error details: ${error.stack}`) // Log the stack trace for more context
  //     } else {
  //       logger.error(`Error inserting events into the database: Unknown error`)
  //     }
  //   }
  // }

  async onEvents(events: Event[]): Promise<void> {
    if (events.length > 1) {
      logger.info(`⏳ Uploading ${events.length} events`)
    }
    for (const event of events) {
      logger.info(
        `📌 ${event.contractAddress} ${event.eventParameters.eventName}(${Object.values(
          event.eventParameters.args
        ).join(', ')})`
      )
    }
    const rows = events.map(event => EventUploader.#toTableRow(event))
    const result = await database.insertInto('events').values(rows).executeTakeFirst()

    if (result.numInsertedOrUpdatedRows !== BigInt(events.length)) {
      logger.error(`Failed to insert events ${JSON.stringify(events)}`)
    }
    logger.info(`✅ Uploaded ${events.length} events`)
  }

  static #toTableRow(event: Event): {
    block_hash: string
    block_number: bigint
    chain_id: bigint
    contract_address: string
    event_args: string
    event_name: string
    log_index: number
    sort_key: string
    transaction_hash: string
    transaction_index: number
  } {
    return {
      chain_id: event.chainId,
      block_number: event.blockNumber,
      transaction_index: event.transactionIndex,
      log_index: event.logIndex,
      contract_address: event.contractAddress,
      event_name: event.eventParameters.eventName,
      event_args: JSON.parse(event.serializeArgs()) as any,
      block_hash: event.blockHash,
      transaction_hash: event.transactionHash,
      sort_key: event.sortKey()
    }
  }
}
