import express from "express"
import dotenv from "dotenv"
import connectDB from "./config/db.js"
import productRoute from "./routes/productRoute.js"
import userRoute from "./routes/userRoute.js"
import orderRoute from "./routes/orderRoute.js"
import { notFound, errorHandler } from "./middleware/errorMiddleware.js"

dotenv.config()
connectDB()
const app = express()

app.use(express.json())
app.use("/api/products", productRoute)
app.use("/api/users", userRoute)
app.use("/api/orders", orderRoute)
app.get("/api/config/paypal", (req, res) =>
  res.send(process.env.PAYPAL_CLIENT_ID)
)
app.use(notFound)
app.use(errorHandler)

const PORT = process.env.PORT || 5001

app.listen(
  PORT,
  console.log(`Server running in ${process.env.NODE_ENV} on port ${PORT}`)
)
