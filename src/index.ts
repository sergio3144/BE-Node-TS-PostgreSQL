import express from 'express'
import { PORT } from './config'
import userRoutes from './routes/users.routes'
import morgan from 'morgan'
import cors from 'cors'

const app = express()



app.use(cors())

app.use(cors({
  origin: ['http://localhost:3000', 'https://tudominio.com'],
  methods: ['GET', 'POST', 'PUT', 'DELETE'],
  credentials: true
}))

app.use(morgan('dev'))    //Nos sirve para ver los llamados en consola
app.use(express.json())
app.use(userRoutes)

app.listen(PORT)
console.log("Server on port", PORT)