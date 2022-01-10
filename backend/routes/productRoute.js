import express from 'express'
const router = express.Router()
import {
  getProducts,
  getSingleProduct,
} from '../controllers/productController.js'

// @desc Fetch all products
//@route GET /api/products
//@access Public
router.route('/').get(getProducts)

// @desc Fetch a product
//@route GET /api/products/:id
//@access Public
router.route('/:id').get(getSingleProduct)

export default router
