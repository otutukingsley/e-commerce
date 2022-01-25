import axios from "axios"
import {
  ORDER_CREATE_ERROR,
  ORDER_CREATE_REQUEST,
  ORDER_CREATE_SUCCESS,
  ORDER_RETRIEVE_SUCCESS,
  ORDER_RETRIEVE_ERROR,
  ORDER_RETRIEVE_REQUEST,
} from "../constants/orderConstants"

export const createOrder = (order) => async (dispatch, getState) => {
  try {
    dispatch({
      type: ORDER_CREATE_REQUEST,
    })

    const {
      userLogin: { userInfo },
    } = getState()

    const config = {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${userInfo.token}`,
      },
    }

    const response = await axios.post(`/api/orders`, order, config)

    dispatch({
      type: ORDER_CREATE_SUCCESS,
      payload: response.data,
    })
  } catch (error) {
    dispatch({
      type: ORDER_CREATE_ERROR,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    })
  }
}

export const getOrder = (id) => async (dispatch, getState) => {
  try {
    dispatch({
      type: ORDER_RETRIEVE_REQUEST,
    })

    const {
      userLogin: { userInfo },
    } = getState()

    const config = {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${userInfo.token}`,
      },
    }

    const response = await axios.get(`/api/orders/${id}`, config)

    dispatch({
      type: ORDER_RETRIEVE_SUCCESS,
      payload: response.data,
    })
  } catch (error) {
    dispatch({
      type: ORDER_RETRIEVE_ERROR,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    })
  }
}