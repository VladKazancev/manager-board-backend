import express, { Request, Response } from 'express'
import wrap from 'express-async-wrap'
import 'reflect-metadata'

import { errorsHandler } from './middleware'
import { apolloServer } from './lib/graphql'
import { dataSource } from './data-source'
import { User } from './entities'

async function start() {
  const a = await dataSource.initialize()
  const app = express()
  await apolloServer.start()
  apolloServer.applyMiddleware({ app, path: '/graphql' })

  app.get(
    '/',
    wrap(async (_req: Request, res: Response) => {
      const usersCount = await dataSource.manager.count(User)
      res.send(['Application works!', usersCount])
    })
  )

  app.use(errorsHandler)

  app.listen(3001, () => {
    console.log('Application ready on port 3001! 🚥')
  })
}

start()
  .then(() => console.info('Server started'))
  .catch((err) => console.error('Failed to start server', err))
