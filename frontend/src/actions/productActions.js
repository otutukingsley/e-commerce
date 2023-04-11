import axios from "axios";
import * as actionTypes from "../constants/productsConstants";

export const listProducts =
  (keyword = "", pageNumber = "") =>
  async (dispatch) => {
    try {
      dispatch({
        type: actionTypes.PRODUCT_LIST_REQUEST,
      });

      const { data } = await axios.get(
        `/api/products?keyword=${keyword}&pageNumber=${pageNumber}`
      );

      dispatch({
        type: actionTypes.PRODUCT_LIST_SUCCESS,
        payload: data,
      });
    } catch (error) {
      dispatch({
        type: actionTypes.PRODUCT_LIST_ERROR,
        payload:
          error.response && error.response.data.message
            ? error.response.data.message
            : error.message,
      });
    }
  };

export const eachProduct = (id) => async (dispatch) => {
  try {
    dispatch({
      type: actionTypes.PRODUCT_DETAILS_REQUEST,
    });

    const response = await axios.get(`/api/products/${id}`);

    dispatch({
      type: actionTypes.PRODUCT_DETAILS_SUCCESS,
      payload: response.data,
    });
  } catch (error) {
    dispatch({
      type: actionTypes.PRODUCT_DETAILS_ERROR,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};

export const deleteProduct = (id) => async (dispatch, getState) => {
  try {
    dispatch({
      type: actionTypes.PRODUCT_DELETE_REQUEST,
    });

    const {
      userLogin: { userInfo },
    } = getState();

    const config = {
      headers: {
        Authorization: `Bearer ${userInfo.token}`,
      },
    };

    const response = await axios.delete(`/api/products/${id}`, config);

    dispatch({
      type: actionTypes.PRODUCT_DELETE_SUCCESS,
      payload: response.data,
    });
  } catch (error) {
    dispatch({
      type: actionTypes.PRODUCT_DELETE_ERROR,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};

export const createSingleProduct =
  (formData = {}) =>
  async (dispatch, getState) => {
    try {
      dispatch({
        type: actionTypes.PRODUCT_CREATE_REQUEST,
      });

      const {
        userLogin: { userInfo },
      } = getState();

      const config = {
        headers: {
          Authorization: `Bearer ${userInfo.token}`,
        },
      };

      const { data } = await axios.post(`/api/products`, formData, config);

      dispatch({
        type: actionTypes.PRODUCT_CREATE_SUCCESS,
        payload: {
          product: data,
          message: "Product created successfully",
        },
      });
    } catch (error) {
      dispatch({
        type: actionTypes.PRODUCT_CREATE_ERROR,
        payload:
          error.response && error.response.data.message
            ? error.response.data.message
            : error.message,
      });
    }
  };

export const clearMessages = () => (dispatch) => {
  dispatch({
    type: actionTypes.CLEAR_MSG,
  });
};

export const resetReview = () => (dispatch) => {
  dispatch({
    type: actionTypes.PRODUCT_REVIEW_RESET,
  });
};

export const updateSingleProduct =
  (id, formData = {}) =>
  async (dispatch, getState) => {
    try {
      dispatch({
        type: actionTypes.PRODUCT_UPDATE_REQUEST,
      });

      const {
        userLogin: { userInfo },
      } = getState();

      const config = {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${userInfo.token}`,
        },
      };

      const { data } = await axios.put(`/api/products/${id}`, formData, config);

      dispatch({
        type: actionTypes.PRODUCT_UPDATE_SUCCESS,
        payload: {
          product: data,
          message: "Product updated successfully",
        },
      });
    } catch (error) {
      dispatch({
        type: actionTypes.PRODUCT_UPDATE_ERROR,
        payload:
          error.response && error.response.data.message
            ? error.response.data.message
            : error.message,
      });
    }
  };

export const reviewSingleProduct =
  (id, formData = {}) =>
  async (dispatch, getState) => {
    try {
      dispatch({
        type: actionTypes.PRODUCT_REVIEW_REQUEST,
      });

      const {
        userLogin: { userInfo },
      } = getState();

      const config = {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${userInfo.token}`,
        },
      };

      const { data } = await axios.post(
        `/api/products/${id}/review`,
        formData,
        config
      );

      dispatch({
        type: actionTypes.PRODUCT_REVIEW_SUCCESS,
        payload: data,
      });
    } catch (error) {
      dispatch({
        type: actionTypes.PRODUCT_REVIEW_ERROR,
        payload:
          error.response && error.response.data.message
            ? error.response.data.message
            : error.message,
      });
    }
  };

export const topProducts = () => async (dispatch) => {
  try {
    dispatch({
      type: actionTypes.TOP_PRODUCTS_REQUEST,
    });

    const {
      data: { products },
    } = await axios.get(`/api/products/top`);

    dispatch({
      type: actionTypes.TOP_PRODUCTS_SUCCESS,
      payload: products,
    });
  } catch (error) {
    dispatch({
      type: actionTypes.TOP_PRODUCTS_ERROR,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};
