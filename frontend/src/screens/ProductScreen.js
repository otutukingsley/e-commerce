import React, { Fragment, useCallback, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams, useNavigate, Link } from "react-router-dom";
import {
  Row,
  Col,
  Image,
  ListGroup,
  Card,
  Button,
  Form,
} from "react-bootstrap";
import Rating from "../components/Rating";
import {
  eachProduct,
  reviewSingleProduct,
  resetReview,
} from "../actions/productActions";
import Loader from "../components/Loader";
import Message from "../components/Message";
import Meta from "../components/Meta";

const ProductScreen = () => {
  const [qty, setQty] = useState(1);
  const [review, setReview] = useState({
    rating: "0",
    comment: "",
  });
  const dispatch = useDispatch();
  const productDetail = useSelector((state) => state.productDetail);
  const { loading, error, product } = productDetail;
  const { error: reviewError, success: reviewSuccess } = useSelector(
    (state) => state.reviewProduct
  );
  const { userInfo } = useSelector((state) => state.userLogin);
  const navigate = useNavigate();
  const { id } = useParams();

  useEffect(() => {
    if (reviewSuccess) {
      alert(`Reviewed successfully`);
      setReview({
        rating: "0",
        comment: "",
      });
      dispatch(resetReview());
    }
    dispatch(eachProduct(id));
  }, [dispatch, id, reviewSuccess]);

  const handleCart = () => {
    navigate(`/cart/${id}?qty=${qty}`);
  };

  const handleReview = useCallback(
    (e) => {
      e.preventDefault();
      dispatch(reviewSingleProduct(id, review));
    },
    [dispatch, id, review]
  );

  const handleChange = useCallback((e) => {
    setReview((current) => ({
      ...current,
      [`${e.target.name}`]: e.target.value,
    }));
  }, []);

  return (
    !!product && (
      <Fragment>
        <Meta title={product.name} />
        <button className="btn btn-dark my-3" onClick={() => navigate(-1)}>
          Go back
        </button>
        {loading ? (
          <Loader />
        ) : error ? (
          <Message variant="danger">{error}</Message>
        ) : (
          <>
            <Row>
              <Col md={6}>
                <Image src={product?.image} alt={product?.name} fluid />
              </Col>
              <Col md={3}>
                <ListGroup variant="flush">
                  <ListGroup.Item>
                    <h3>{product?.name}</h3>
                  </ListGroup.Item>
                  <ListGroup.Item>
                    <Rating
                      value={product?.rating}
                      text={`${product?.numReviews} reviews`}
                    />
                  </ListGroup.Item>
                  <ListGroup.Item>Price: ${product?.price}</ListGroup.Item>
                  <ListGroup.Item>
                    Description: ${product?.description}
                  </ListGroup.Item>
                </ListGroup>
              </Col>
              <Col md={3}>
                <Card>
                  <ListGroup variant="flush">
                    <ListGroup.Item>
                      <Row>
                        <Col>Price:</Col>
                        <Col>
                          <strong>{product?.price}</strong>
                        </Col>
                      </Row>
                    </ListGroup.Item>
                    <ListGroup.Item>
                      <Row>
                        <Col>Status:</Col>
                        <Col>
                          {product?.countInStock > 0
                            ? "In Stock"
                            : "Out of Stock"}
                        </Col>
                      </Row>
                    </ListGroup.Item>

                    {product?.countInStock > 0 && (
                      <ListGroup.Item>
                        <Row>
                          <Col>Qty</Col>
                          <Col>
                            <Form.Control
                              as="select"
                              value={qty}
                              onChange={(e) => setQty(e.target.value)}
                            >
                              {[...Array(product?.countInStock).keys()].map(
                                (x) => (
                                  <option key={x + 1} value={x + 1}>
                                    {x + 1}
                                  </option>
                                )
                              )}
                            </Form.Control>
                          </Col>
                        </Row>
                      </ListGroup.Item>
                    )}

                    <ListGroup.Item>
                      <Button
                        className="btn-block"
                        type="button"
                        disabled={product?.countInStock <= 0}
                        onClick={handleCart}
                      >
                        Add To Cart
                      </Button>
                    </ListGroup.Item>
                  </ListGroup>
                </Card>
              </Col>
            </Row>
            <Row className="mt-5">
              <Col md={6}>
                <h2>Reviews</h2>
                {product?.reviews?.length === 0 && (
                  <Message>No Reviews</Message>
                )}
                <ListGroup
                  as="ul"
                  variant="flush"
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "flex-start",
                    alignItems: "flex-start",
                    gap: "1rem",
                  }}
                >
                  {product?.reviews.map((review) => (
                    <ListGroup.Item
                      as="li"
                      key={review?._id}
                      style={{
                        border: "1px solid rgba(0, 0, 0, 0.125)",
                      }}
                    >
                      <strong
                        style={{
                          fontWeight: "900",
                        }}
                      >
                        {review?.name}
                      </strong>
                      <div>
                        <span>Rating:</span>{" "}
                        <Rating
                          value={review?.rating}
                          style={{
                            display: "inline-block",
                          }}
                        />
                      </div>

                      <p>Date: {review?.createdAt?.substring(0, 10)}</p>
                      <p className="mb-0">{review?.comment}</p>
                    </ListGroup.Item>
                  ))}
                  <ListGroup.Item as="li" className="p-0">
                    <h2>Write a Customer Review</h2>
                    {reviewError && (
                      <Message variant="danger">{reviewError}</Message>
                    )}
                    {userInfo ? (
                      <>
                        <Form onSubmit={handleReview}>
                          <Form.Group controlId="rating">
                            <Form.Label>Rating</Form.Label>
                            <Form.Control
                              as="select"
                              value={review.rating}
                              onChange={handleChange}
                              name="rating"
                              required
                            >
                              <option value="">Select...</option>
                              <option value="4">5 - Excellent</option>
                              <option value="3">4 - Very Good</option>
                              <option value="2">3 - Good</option>
                              <option value="5">2 - Fair</option>
                              <option value="1">1 - Poor</option>
                            </Form.Control>
                          </Form.Group>
                          <Form.Group controlId="comment" className="mt-3">
                            <Form.Label>Comment</Form.Label>
                            <Form.Control
                              as="textarea"
                              row="3"
                              value={review.comment}
                              onChange={handleChange}
                              name="comment"
                              required
                            ></Form.Control>
                          </Form.Group>
                          <Button
                            type="submit"
                            variant="primary"
                            className="mt-3"
                          >
                            Submit
                          </Button>
                        </Form>
                      </>
                    ) : (
                      <Message className="mb-0">
                        Please{" "}
                        <Link
                          to="/login"
                          style={{
                            color: "#10516c",
                            textDecoration: "underline",
                          }}
                        >
                          sign in
                        </Link>{" "}
                        to write a review
                      </Message>
                    )}
                  </ListGroup.Item>
                </ListGroup>
              </Col>
            </Row>
          </>
        )}
      </Fragment>
    )
  );
};

export default ProductScreen;
