import express from "express"
const router = express.Router()
import {
  getProducts,
  getSingleProduct,
  deleteSingleProduct,
} from "../controllers/productController.js"
import { protect, isAdmin } from "../middleware/authMiddleware.js"

// @desc Fetch all products
//@route GET /api/products
//@access Public
router.route("/").get(getProducts)

// @desc Fetch a product
//@route GET /api/products/:id
//@access Public
router
  .route("/:id")
  .get(getSingleProduct)
  .delete(protect, isAdmin, deleteSingleProduct)

export default router
