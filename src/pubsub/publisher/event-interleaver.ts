import BinaryHeap from 'heap-js'
import { env } from '#/env'
import { logger } from '#/logger'
import { type Event, compareEvents } from '#/pubsub/event'
import type { EventSubscriber } from '#/pubsub/subscriber/interface'
import { sleep } from '#/utilities/index'
import type { EventPublisher } from './interface'

type ReceivedEvent = {
  event: Event
  receivedAt: Date
}

type PriorityQueue = {
  heap: BinaryHeap<ReceivedEvent>
  size: () => number
  insert: (receivedEvent: ReceivedEvent) => void
  pop: () => ReceivedEvent | undefined
  peek: () => ReceivedEvent | undefined
}

const customComparator = (a: ReceivedEvent, b: ReceivedEvent) => compareEvents(a.event, b.event)

const createPriorityQueue = (): PriorityQueue => {
  const heap = new BinaryHeap<ReceivedEvent>(customComparator)

  const insert = (receivedEvent: ReceivedEvent) => {
    heap.push(receivedEvent)
  }

  const pop = (): ReceivedEvent | undefined => {
    return heap.pop()
  }

  const peek = (): ReceivedEvent | undefined => {
    return heap.peek()
  }

  const size = (): number => {
    return heap.size()
  }

  return { heap, size, insert, pop, peek }
}

/**
 * Concrete implementation of EventPublisher for interleaving disparate
 * event streams from multiple upstream publishers into a single
 * time-ordered stream of events.
 */
export class EventInterleaver implements EventPublisher, EventSubscriber {
  private priorityQueue: PriorityQueue = createPriorityQueue()
  private subscribers: EventSubscriber[] = []

  // Delay before propagating events to ensure time ordering.
  private readonly propagationDelay: number = 3000

  // Interval at which the queue is checked and processed.
  private readonly daemonInterval: number = 1000

  // Timer for the repeating process. Null when not running.
  private daemonTimer: NodeJS.Timeout | null = null

  // Flag to prevent concurrent processing.
  private isProcessing = false

  constructor(upstream: EventPublisher[] = []) {
    for (const publisher of upstream) {
      publisher.subscribe(this)
    }
  }

  /**
   * Subscribe a new event subscriber.
   * @param subscriber - The subscriber to be added.
   */
  subscribe(subscriber: EventSubscriber): EventPublisher {
    this.subscribers.push(subscriber)
    return this
  }

  /**
   * Unsubscribe an existing event subscriber.
   * @param subscriber - The subscriber to be removed.
   */
  unsubscribe(subscriber: EventSubscriber): EventPublisher {
    this.subscribers = this.subscribers.filter(existingSubscriber => existingSubscriber !== subscriber)
    return this
  }

  /**
   * Start the event interleaving process.
   * Initializes and starts a timer to process the event queue at regular intervals.
   * Prevents concurrent processing of events using a flag.
   */
  start(): Promise<void> {
    if (this.daemonTimer) {
      // Already running, so exit.
      return Promise.resolve()
    }
    // Set up a timer that triggers at regular intervals.
    this.daemonTimer = setInterval(async () => {
      // Check if processing is already underway.
      if (!this.isProcessing) {
        // Mark as processing.
        this.isProcessing = true
        try {
          // Process events in the queue.
          await this.#processQueue()
        } catch (error) {
          // Log and handle any errors during processing.
          logger.error('Error processing queue:', error)
        } finally {
          // Reset processing flag, allowing the next interval to process.
          this.isProcessing = false
        }
      }
    }, this.daemonInterval)
    return Promise.resolve()
  }

  /**
   * Stop the event interleaving process.
   * Clears the timer and resets the related state.
   */
  stop(): void {
    if (this.daemonTimer) {
      // Clear the interval timer.
      clearInterval(this.daemonTimer)
      this.daemonTimer = null
    }
  }

  /**
   * Handle an incoming event.
   * Adds the event to the priority queue and sorts it to maintain time order.
   * @param event - The event to be handled.
   */
  onEvent(event: Event): Promise<void> {
    this.priorityQueue.insert({ event, receivedAt: new Date() })
    return Promise.resolve()
  }

  onEvents(events: Event[]): Promise<void> {
    for (const event of events) {
      this.onEvent(event)
    }
    return Promise.resolve()
  }

  async #processQueue(): Promise<void> {
    const now = new Date()
    const batchSize = env.BATCH_SIZE
    // Muted by user
    // biome-ignore lint/suspicious/noEvolvingTypes: <explanation>
    let batch = []

    // drain the queue of "ready" events
    while (this.priorityQueue.size() > 0 && this.#isEventReady(now)) {
      const receivedEvent = this.priorityQueue.pop()
      if (receivedEvent === undefined) {
        continue
      }
      batch.push(receivedEvent.event)

      if (batch.length >= batchSize) {
        await this.#propagateBatch(batch)
        batch = []
      }
      //   await sleep(1000)
    }

    // Propagate any remaining events in the last batch
    if (batch.length > 0) {
      await this.#propagateBatch(batch)
    }
  }

  #isEventReady(now: Date): boolean {
    const receivedEvent = this.priorityQueue.peek()
    return receivedEvent !== undefined && now.getTime() - receivedEvent.receivedAt.getTime() >= this.propagationDelay
  }

  async #propagateBatch(events: Event[]): Promise<void> {
    await Promise.allSettled(this.subscribers.map(subscriber => subscriber.onEvents(events)))
  }
}
