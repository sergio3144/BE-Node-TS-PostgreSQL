import express from 'express'
import { PORT } from './config/config'
import userRoutes from './routes/users.routes'
import morgan from 'morgan'
import cors from 'cors'
import swaggerUI from 'swagger-ui-express'
import swaggerSpec from './config/swagger'

const app = express()



app.use(cors())

app.use(cors({
  origin: ['http://localhost:3000', 'https://be-node-ts-postgresql.onrender.com/api-docs'],
  methods: ['GET', 'POST', 'PUT', 'DELETE'],
  credentials: true
}))

app.use(morgan('dev'))    //Nos sirve para ver los llamados en consola
app.use(express.json())
app.use(userRoutes)

app.listen(PORT)
console.log("Server on port", PORT)

app.use('/api-docs', swaggerUI.serve, swaggerUI.setup(swaggerSpec))