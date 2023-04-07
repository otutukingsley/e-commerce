import express from "express";
const router = express.Router();
import {
  addOrderedItems,
  getOrderedItem,
  updateOrderedItem,
  getAuthUserOrders,
  getOrders,
} from "../controllers/orderController.js";
import { isAdmin, protect } from "../middleware/authMiddleware.js";

// @desc Create an order
//@route POST /api/orders
//@access Public
router
  .route("/")
  .post(protect, addOrderedItems)
  .get(protect, isAdmin, getOrders);
router.route("/myorders").get(protect, getAuthUserOrders);
router.route("/:id").get(protect, getOrderedItem);
router.route("/:id/pay").put(protect, updateOrderedItem);

export default router;
