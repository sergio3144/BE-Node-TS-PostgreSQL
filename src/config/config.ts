import dotenv from 'dotenv'

dotenv.config()

export const DB_USER = 'postgres'
export const DB_HOST = 'localhost'
export const DB_PASSWORD = '3144DBS'
export const DB_DATABASE = 'nodepg'
export const DB_PORT = 5432


export const PORT = process.env.PORT || 3000