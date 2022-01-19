import axios from 'axios'
import {
  CART_ADD_ITEM,
  CART_REMOVE_ITEM,
  CART_SAVE_SHIPPING_DETAILS,
  CART_SAVE_PAYMENT_METHOD
} from '../constants/cartConstants'

export const addItemsToCart = (id, qty) => async (dispatch, getState) => {
  const response = await axios.get(`/api/products/${id}`)

  dispatch({
    type: CART_ADD_ITEM,
    payload: {
      product: response.data._id,
      name: response.data.name,
      image: response.data.image,
      price: response.data.price,
      countInStock: response.data.countInStock,
      qty,
    },
  })

  localStorage.setItem('cartItems', JSON.stringify(getState().cart.cartItems))
}

export const removeItemsFromCart = (id) => async (dispatch, getState) => {
  dispatch({
    type: CART_REMOVE_ITEM,
    payload: id,
  })

  localStorage.setItem('cartItems', JSON.stringify(getState().cart.cartItems))
}

export const saveShippingDetails = (data) => async (dispatch) => {
  dispatch({ type: CART_SAVE_SHIPPING_DETAILS, payload: data })

  localStorage.setItem('shippingDetails', JSON.stringify(data))
}

export const savePaymentMethod = (data) => async (dispatch) => {
  dispatch({ type: CART_SAVE_PAYMENT_METHOD, payload: data })

  localStorage.setItem('paymentMethod', data)
}
