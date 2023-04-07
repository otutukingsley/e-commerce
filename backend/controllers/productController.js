import asyncHandler from "express-async-handler";
import Product from "../models/productsModel.js";

// @desc Fetch all products
//@route GET /api/products
//@access Public
const getProducts = asyncHandler(async (req, res) => {
  const keyword = req.query.keyword
    ? {
        name: {
          $regex: req.query.keyword,
          $options: "i",
        },
      }
    : {};

  const products = await Product.find({ ...keyword });
  res.json(products);
});

// @desc Fetch a product
//@route GET /api/products/:id
//@access Public
const getSingleProduct = asyncHandler(async (req, res) => {
  const product = await Product.findById(req.params.id);
  if (product) {
    res.json(product);
  } else {
    res.status(404);
    throw new Error("Product not found");
  }
});

// @desc Delete a product
//@route DELETE /api/products/:id
//@access Private Admin Only
const deleteSingleProduct = asyncHandler(async (req, res) => {
  const product = await Product.findById(req.params.id);
  if (product) {
    await product.remove();
    res.json({
      message: "Product deleted successfully",
    });
  } else {
    res.status(404);
    throw new Error("Product not found");
  }
});

// @desc Create a product
//@route POST /api/products
//@access Private Admin Only
const createSingleProduct = asyncHandler(async (req, res) => {
  const product = new Product({
    name: "Sample name",
    price: 0,
    user: req.user._id,
    image: "/images/product-image-default.svg",
    brand: "Sample brand",
    category: "Sample category",
    countInStock: 0,
    numReviews: 0,
    description: "Sample description",
  });

  const createdProduct = await product.save();
  res.status(201).json(createdProduct);
});

// @desc Edit a product
//@route PUT /api/products
//@access Private Admin Only
const updateSingleProduct = asyncHandler(async (req, res) => {
  const { name, price, description, image, brand, category, countInStock } =
    req.body;
  const product = await Product.findById(req.params.id);

  if (product) {
    product.name = name;
    product.price = price;
    product.description = description;
    product.image = image;
    product.brand = brand;
    product.category = category;
    product.countInStock = countInStock;

    const updatedProduct = await product.save();
    res.json(updatedProduct);
  } else {
    res.status(404);
    throw new Error("Product not found");
  }
});

// @desc Review a product
//@route POST /api/product/:id/review
//@access Private
const reviewSingleProduct = asyncHandler(async (req, res) => {
  const { rating, comment } = req.body;
  const product = await Product.findById(req.params.id);

  if (product) {
    console.log(product.user);
    console.log(req.user._id);
    const reviewed = product.reviews.find(
      (r) => r.user.toString() === req.user._id.toString()
    );

    if (reviewed) {
      res.status(400);
      throw new Error("This product have already been reviewed by you");
    }

    const review = {
      name: req.user.name,
      rating: Number(rating),
      comment: comment,
      user: req.user._id,
    };

    product.reviews.push(review);
    product.numReviews = product.reviews.length;
    product.rating =
      product.reviews.reduce((acc, curr) => curr?.rating + acc, 0) /
      product.reviews.length;

    await product.save();
    res.status(201).json({ message: "Review added" });
  } else {
    res.status(404);
    throw new Error("Product not found");
  }
});

export {
  getProducts,
  getSingleProduct,
  deleteSingleProduct,
  createSingleProduct,
  updateSingleProduct,
  reviewSingleProduct,
};
