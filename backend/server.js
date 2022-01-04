import express from 'express'
import dotenv from 'dotenv'
import colors from 'colors'
import connectDB from './config/db.js'
import productRoute from './routes/productRoute.js'
const app = express()

dotenv.config()

connectDB();


app.use('/api/products', productRoute)

const PORT = process.env.PORT || 5001

app.listen(PORT, console.log(`Server running in ${process.env.NODE_ENV} on port ${PORT}`.yellow.bold))
