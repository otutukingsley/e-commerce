import axios from "axios"
import * as actionTypes from "../constants/productsConstants"

export const listProducts = () => async (dispatch) => {
  try {
    dispatch({
      type: actionTypes.PRODUCT_LIST_REQUEST,
    })

    const response = await axios.get("/api/products")

    dispatch({
      type: actionTypes.PRODUCT_LIST_SUCCESS,
      payload: response.data,
    })
  } catch (error) {
    dispatch({
      type: actionTypes.PRODUCT_LIST_ERROR,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    })
  }
}

export const eachProduct = (id) => async (dispatch) => {
  try {
    dispatch({
      type: actionTypes.PRODUCT_DETAILS_REQUEST,
    })

    const response = await axios.get(`/api/products/${id}`)

    dispatch({
      type: actionTypes.PRODUCT_DETAILS_SUCCESS,
      payload: response.data,
    })
  } catch (error) {
    dispatch({
      type: actionTypes.PRODUCT_DETAILS_ERROR,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    })
  }
}

export const deleteProduct = (id) => async (dispatch, getState) => {
  try {
    dispatch({
      type: actionTypes.PRODUCT_DELETE_REQUEST,
    })

    const {
      userLogin: { userInfo },
    } = getState()

    const config = {
      headers: {
        Authorization: `Bearer ${userInfo.token}`,
      },
    }

    const response = await axios.delete(`/api/products/${id}`, config)

    dispatch({
      type: actionTypes.PRODUCT_DELETE_SUCCESS,
      payload: response.data,
    })
  } catch (error) {
    dispatch({
      type: actionTypes.PRODUCT_DELETE_ERROR,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    })
  }
}

export const clearMessages = () => (dispatch) => {
  dispatch({
    type: actionTypes.CLEAR_MSG,
  })
}
