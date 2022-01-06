import express from 'express'
import dotenv from 'dotenv'
import colors from 'colors'
import connectDB from './config/db.js'
import productRoute from './routes/productRoute.js'
import { notFound, errorHandler } from './middleware/errorMiddleware.js'

const app = express()

dotenv.config()

connectDB()

app.use('/api/products', productRoute)
app.use(notFound)
app.use(errorHandler)

const PORT = process.env.PORT || 5001

app.listen(
  PORT,
  console.log(
    `Server running in ${process.env.NODE_ENV} on port ${PORT}`.yellow.bold,
  ),
)
