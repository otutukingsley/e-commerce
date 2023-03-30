import express from "express";
const router = express.Router();
import {
  getProducts,
  getSingleProduct,
  deleteSingleProduct,
  updateSingleProduct,
  createSingleProduct,
} from "../controllers/productController.js";
import { protect, isAdmin } from "../middleware/authMiddleware.js";

// @desc Fetch all products
//@route GET /api/products
//@access Public
router
  .route("/")
  .get(getProducts)
  .post(protect, isAdmin, createSingleProduct) 

// @desc Fetch a product
//@route GET /api/products/:id
//@access Public
router
  .route("/:id")
  .get(getSingleProduct)
  .delete(protect, isAdmin, deleteSingleProduct)
  .put(protect, isAdmin, updateSingleProduct);

export default router;
