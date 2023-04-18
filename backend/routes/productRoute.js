import express from "express";
const router = express.Router();
import {
  getProducts,
  getSingleProduct,
  deleteSingleProduct,
  updateSingleProduct,
  createSingleProduct,
  reviewSingleProduct,
  getTopProducts,
  uploadImage,
} from "../controllers/productController.js";
import { protect, isAdmin } from "../middleware/authMiddleware.js";

// @desc Top products
//@route Get /api/products/top
//@access Public
router.route("/top").get(getTopProducts);

// @desc Fetch all products
//@route GET /api/products
//@access Public
router.route("/").get(getProducts).post(protect, isAdmin, createSingleProduct);

// @desc Fetch a product
//@route GET /api/products/:id
//@access Public
router
  .route("/:id")
  .get(getSingleProduct)
  .delete(protect, isAdmin, deleteSingleProduct)
  .put(protect, isAdmin, updateSingleProduct);

// @desc Review a product
//@route POST /api/products/:id/review
//@access Public
router.route("/:id/review").post(protect, reviewSingleProduct);

// @desc Upload a product image
//@route POST /api/products/:id/upload
//@access Admin only
router.route("/:id/upload").post(protect, isAdmin, uploadImage);

export default router;
