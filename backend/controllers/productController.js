import asyncHandler from "express-async-handler"
import Product from "../models/productsModel.js"

// @desc Fetch all products
//@route GET /api/products
//@access Public
const getProducts = asyncHandler(async (req, res) => {
  const products = await Product.find({})
  res.json(products)
})

// @desc Fetch a product
//@route GET /api/products/:id
//@access Public
const getSingleProduct = asyncHandler(async (req, res) => {
  const product = await Product.findById(req.params.id)
  if (product) {
    res.json(product)
  } else {
    res.status(404)
    throw new Error("Product not found")
  }
})

// @desc Delete a product
//@route DELETE /api/products/:id
//@access Private Admin Only
const deleteSingleProduct = asyncHandler(async (req, res) => {
  const product = await Product.findById(req.params.id)
  if (product) {
    await product.remove()
    res.json({
      message: "Product deleted successfully",
    })
  } else {
    res.status(404)
    throw new Error("Product not found")
  }
})

export { getProducts, getSingleProduct, deleteSingleProduct }
