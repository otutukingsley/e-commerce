import {
  ORDER_CREATE_ERROR,
  ORDER_CREATE_REQUEST,
  ORDER_CREATE_SUCCESS,
  ORDER_RETRIEVE_REQUEST,
  ORDER_RETRIEVE_SUCCESS,
  ORDER_RETRIEVE_ERROR,
  ORDER_PAY_REQUEST,
  ORDER_PAY_SUCCESS,
  ORDER_PAY_RESET,
  ORDER_PAY_ERROR,
} from "../constants/orderConstants"

export const orderCreatedReducer = (state = {}, action) => {
  switch (action.type) {
    case ORDER_CREATE_REQUEST:
      return {
        ...state,
        loading: true,
      }

    case ORDER_CREATE_SUCCESS:
      return {
        ...state,
        loading: false,
        success: true,
        order: action.payload,
      }

    case ORDER_CREATE_ERROR:
      return {
        ...state,
        loading: false,
        error: action.payload,
      }

    default:
      return state
  }
}

export const orderRetrievedReducer = (
  state = { loading: true, orderItems: [], shippingDetails: {} },
  action
) => {
  switch (action.type) {
    case ORDER_RETRIEVE_REQUEST:
      return {
        ...state,
        loading: true,
      }

    case ORDER_RETRIEVE_SUCCESS:
      return {
        ...state,
        loading: false,
        order: action.payload,
      }

    case ORDER_RETRIEVE_ERROR:
      return {
        ...state,
        loading: false,
        error: action.payload,
      }

    default:
      return state
  }
}

export const orderPayReducer = (state = {}, action) => {
  switch (action.type) {
    case ORDER_PAY_REQUEST:
      return {
        loading: true,
      }

    case ORDER_PAY_SUCCESS:
      return {
        ...state,
        success: true,
        loading: false,
      }

    case ORDER_PAY_ERROR:
      return {
        ...state,
        error: action.payload,
        loading: false,
      }

    case ORDER_PAY_RESET:
      return {}
    default:
      return state
  }
}
