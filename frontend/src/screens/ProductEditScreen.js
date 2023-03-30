import React, { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { Form, Button } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import Message from "../components/Message";
import Loader from "../components/Loader";
import FormContainer from "../components/FormContainer";
import { eachProduct } from "../actions/productActions";

const ProductEditScreen = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [productItem, setProductItem] = useState({
    name: "",
    price: 0,
    image: "",
    brand: "",
    category: "",
    countInStock: 0,
    description: "",
  });
  const { loading, error, product } = useSelector(
    (state) => state.productDetail
  );

  useEffect(() => {
    if (!product.name || product._id !== id) {
      dispatch(eachProduct(id));
    } else {
      setProductItem((current) => ({
        ...current,
        name: product.name,
        price: product.price,
        image: product.image,
        brand: product.brand,
        category: product.category,
        countInStock: product.countInStock,
        description: product.description,
      }));
    }
  }, [dispatch, id, product]);

  const submitHandler = (e) => {
    e.preventDefault();
    //UPDATE PRODUCT
  };

  return (
    <>
      <button className="btn btn-light my-3" onClick={() => navigate(-1)}>
        Go back
      </button>
      <FormContainer>
        <h1>Edit Product Details</h1>
        {loading ? (
          <Loader />
        ) : error ? (
          <Message variant="danger">{error}</Message>
        ) : (
          <Form onSubmit={submitHandler}>
            <Form.Group controlId="name" className="py-3">
              <Form.Label>Name</Form.Label>
              <Form.Control
                type="text"
                name="name"
                placeholder="Enter name"
                value={productItem.name}
                onChange={(e) => {
                  setProductItem((current) => ({
                    ...current,
                    [e.target.name]: e.target.value,
                  }));
                }}
              ></Form.Control>
            </Form.Group>

            <Form.Group controlId="price" className="py-3">
              <Form.Label>Price</Form.Label>
              <Form.Control
                type="number"
                name="price"
                placeholder="Enter price"
                value={productItem.price}
                onChange={(e) => {
                  setProductItem((current) => ({
                    ...current,
                    [e.target.name]: e.target.value,
                  }));
                }}
              ></Form.Control>
            </Form.Group>

            <Form.Group controlId="image" className="py-3">
              <Form.Label>Image</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter image url"
                name="image"
                value={productItem.image}
                onChange={(e) => {
                  setProductItem((current) => ({
                    ...current,
                    [e.target.name]: e.target.value,
                  }));
                }}
              ></Form.Control>
            </Form.Group>

            <Form.Group controlId="brand" className="py-3">
              <Form.Label>Brand</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter brand"
                name="brand"
                value={productItem.brand}
                onChange={(e) => {
                  setProductItem((current) => ({
                    ...current,
                    [e.target.name]: e.target.value,
                  }));
                }}
              ></Form.Control>
            </Form.Group>

            <Form.Group controlId="countInStock" className="py-3">
              <Form.Label>Count in Stock</Form.Label>
              <Form.Control
                type="number"
                placeholder="Enter count in stock"
                name="countInStock"
                value={productItem.countInStock}
                onChange={(e) => {
                  setProductItem((current) => ({
                    ...current,
                    [e.target.name]: e.target.value,
                  }));
                }}
              ></Form.Control>
            </Form.Group>

            <Form.Group controlId="category" className="py-3">
              <Form.Label>Category</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter category"
                name="category"
                value={productItem.category}
                onChange={(e) => {
                  setProductItem((current) => ({
                    ...current,
                    [e.target.name]: e.target.value,
                  }));
                }}
              ></Form.Control>
            </Form.Group>

            <Form.Group controlId="description" className="py-3">
              <Form.Label>Description</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter description"
                name="description"
                value={productItem.description}
                onChange={(e) => {
                  setProductItem((current) => ({
                    ...current,
                    [e.target.name]: e.target.value,
                  }));
                }}
              ></Form.Control>
            </Form.Group>

            <Button type="submit" variant="primary" className="py-3">
              Update
            </Button>
          </Form>
        )}
      </FormContainer>
    </>
  );
};

export default ProductEditScreen;
