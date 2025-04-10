#!/usr/bin/env bun
import { type ChildProcessWithoutNullStreams, spawn } from 'node:child_process'
import { gracefulExit } from 'exit-hook'

import { env } from '#/env'
import { logger } from '#/logger'
import { sleep } from '#/utilities'
import { colors } from '#/utilities/colors'
import { pingRpc } from '#/utilities/ping'
import { watchAllEfpContractEvents } from '#/watch'
import { type EvmClient, evmClients } from './clients/viem/index'

import fs from 'fs'
import { type InsertObject, Kysely } from 'kysely'
import { PostgresJSDialect } from 'kysely-postgres-js'
import postgres from 'postgres'
import type { DB } from '#/database/generated/index.ts'
// import { database } from '#/database'


async function waitForPingSuccess(client: EvmClient): Promise<void> {
  async function tryAttempt(attempt: number): Promise<void> {
    try {
      await pingRpc({ client })
      console.log(`${colors.GREEN}Successfully connected to RPC${colors.ENDC}`)
    } catch (error) {
      logger.warn(`${colors.YELLOW}(Attempt: ${attempt}) Failed to connect to RPC${colors.ENDC}`, error)
      await sleep(1_000)
      await tryAttempt(attempt + 1)
    }
  }
  await tryAttempt(1)
}

async function runDbmateCommand(command: string): Promise<void> {
  return new Promise<void>((resolve: () => void, reject: (reason?: any) => void) => {
    const cmd = 'bunx'
    const args = ['dbmate', command]
    const cmdWithArgs: string = [cmd, ...args].join(' ')
    const dbmate: ChildProcessWithoutNullStreams = spawn(cmd, args)

    dbmate.stdout.on('data', (data: Buffer) => {
      console.log(data.toString())
    })

    dbmate.stderr.on('data', (data: Buffer) => {
      console.error(data.toString())
    })

    dbmate.on('close', (code: number) => {
      if (code === 0) {
        resolve()
        console.log(`${cmdWithArgs} process exited with code ${code}`)
      } else {
        reject(new Error(`${cmdWithArgs} process exited with code ${code}`))
      }
    })
  })
}

async function runSetupDbScript(): Promise<void> {
  return new Promise<void>((resolve: () => void, reject: (reason?: any) => void) => {
    const cmd = 'bun'
    const args = ['database:up']
    const cmdWithArgs: string = [cmd, ...args].join(' ')
    const dbmate: ChildProcessWithoutNullStreams = spawn(cmd, args)

    dbmate.stdout.on('data', (data: Buffer) => {
      console.log(data.toString())
    })

    dbmate.stderr.on('data', (data: Buffer) => {
      console.error(data.toString())
    })

    dbmate.on('close', (code: number) => {
      if (code === 0) {
        resolve()
        console.log(`${cmdWithArgs} process exited with code ${code}`)
      } else {
        reject(new Error(`${cmdWithArgs} process exited with code ${code}`))
      }
    })
  })
}

async function main() {
  try {
    logger.info(`⏳ DATABASE_URL ${env.DATABASE_URL}`)
    logger.log(`Process ID: ${process.pid}`)
    // wait for db to be up
    // for (;;) {
    //   try {
    //     logger.log(`dbmate status`, `🗄️`)
    //     await runDbmateCommand('status')
    //     break
    //   } catch {
    //     // logger.warn(error)
    //     await sleep(1_000)
    //   }
    // }
    // logger.box(`🗄️`, `dbmate up`)
    // await runSetupDbScript()
    // await runDbmateCommand('up')
    // logger.box(`🗄️`, `dbmate status`)
    // await runDbmateCommand('status')
    // logger.info(`⏳ DATABASE_URL ${env.DATABASE_URL}`)

    const chainId = env.CHAIN_ID
    const client = evmClients[chainId]()
    await waitForPingSuccess(client)
    logger.box(`EFP Indexer start`, '🔍')
    logger.log(`chain id ${chainId}`)
    await watchAllEfpContractEvents({ client })
  } catch (error) {
    const errorMessage = error instanceof Error ? error.message : error
    logger.fatal(errorMessage)
    gracefulExit(1)
  }
  logger.log('end')
}

// async function main() {
//   try {
//     logger.info(`⏳ DATABASE_URL ${env.DATABASE_URL}`)
//     logger.log(`Process ID: ${process.pid}`)
//     // wait for db to be up
//     // for (;;) {
//     //   try {
//     //     logger.log(`dbmate status`, `🗄️`)
//     //     await runDbmateCommand('status')
//     //     break
//     //   } catch {
//     //     // logger.warn(error)
//     //     await sleep(1_000)
//     //   }
//     // }
//     // logger.box(`🗄️`, `dbmate up`)
//     // await runSetupDbScript()
//     // await runDbmateCommand('up')
//     // logger.box(`🗄️`, `dbmate status`)
//     // await runDbmateCommand('status')
//     // logger.info(`⏳ DATABASE_URL ${env.DATABASE_URL}`)

//     const postgresClient = postgres(env.DATABASE_URL, {
//       ssl: {
//         rejectUnauthorized: false, // Disable certificate validation (use carefully and avoid in production)
//         ca: fs.readFileSync('/Users/fuzezhong/Downloads/ap-east-1-bundle.pem').toString(), // Load root certificate if needed
//       }
//     })
//     try {
//       // Execute SQL query
//       const result = await postgresClient`SELECT COUNT(*) AS count FROM events`

//       // Extract the count from the first row in the result using bracket notation
//       const eventCount = result[0]?.['count'] ?? 0  // Access with ['count']

//       // Log the event count
//       logger.info(`⏳ Number of events in the database: ${eventCount}`)
//     } catch (error) {
//       // Log any error that occurs
//       logger.error('Error fetching event count', error)
//     }

//     logger.info('Initializing database connection...')
//     const database = new Kysely<DB>({
//       dialect: new PostgresJSDialect({
//         postgres: postgresClient
//       }),
//       log: (event) => {
//         if (event.level === 'query') {
//           console.log(`Executing query: ${event.query}`)
//         }
//       }
//     })

//     logger.info('Database connection initialized')

//     // Fetch the count of events from the database
//     const eventCount = await database
//       .selectFrom('events')
//       .select([database.fn.countAll().as('count')])
//       .executeTakeFirst()
//       .catch((err) => {
//         logger.error('Error executing query', err)
//         throw err  // Rethrow or handle as needed
//       })

//     logger.info(`⏳ Number of events in the database: ${eventCount?.count}`)

//     const chainId = env.CHAIN_ID
//     const client = evmClients[chainId]()
//     await waitForPingSuccess(client)
//     logger.box(`EFP Indexer start`, '🔍')
//     logger.log(`chain id ${chainId}`)
//     await watchAllEfpContractEvents({ client })
//   } catch (error) {
//     const errorMessage = error instanceof Error ? error.message : error
//     logger.fatal(errorMessage)
//     gracefulExit(1)
//   }
//   logger.log('end')
// }

main()
