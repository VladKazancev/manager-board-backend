import { DataSource } from 'typeorm'
import 'dotenv/config'

export const dataSource = new DataSource({
  type: 'postgres',
  url: process.env.DATABASE_URL,
  synchronize: true,
  logging: true,
  entities: [__dirname + '/entities/*.entity.{ts,js}'],
  migrations: [__dirname + '/entities/*.migration.{ts,js}'],
})
