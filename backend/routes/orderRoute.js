import express from "express"
const router = express.Router()
import {
  addOrderedItems,
  getOrderedItem,
} from "../controllers/orderController.js"
import { protect } from "../middleware/authMiddleware.js"

// @desc Create an order
//@route POST /api/orders
//@access Public
router.route("/").post(protect, addOrderedItems)

router.route("/:id").get(protect, getOrderedItem)

export default router
