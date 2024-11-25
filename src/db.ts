import pg from 'pg'
import { DB_DATABASE, DB_PASSWORD, DB_PORT, DB_USER, DB_HOST } from './config'

export const pool = new pg.Pool({
  user: DB_USER,
  host: DB_HOST,
  password: DB_PASSWORD,
  database: DB_DATABASE,
  port: DB_PORT,
})