import * as actionTypes from "../constants/productsConstants.js"

export const initialState = {
  products: [],
  product: { reviews: [] },
  loading: false,
  error: null,
  resMessage: null,
  success: false,
}

export const productListReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.PRODUCT_LIST_REQUEST:
      return {
        ...state,
        loading: true,
      }

    case actionTypes.PRODUCT_LIST_SUCCESS:
      return {
        ...state,
        products: action.payload,
        loading: false,
      }

    case actionTypes.PRODUCT_LIST_ERROR:
      return {
        ...state,
        error: action.payload,
        loading: false,
      }

    default:
      return state
  }
}

export const productDetailsReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.PRODUCT_DETAILS_REQUEST:
      return {
        ...state,
        loading: true,
      }

    case actionTypes.PRODUCT_DETAILS_SUCCESS:
      return {
        ...state,
        product: action.payload,
        loading: false,
      }

    case actionTypes.PRODUCT_DETAILS_ERROR:
      return {
        ...state,
        error: action.payload,
        loading: false,
      }

    default:
      return state
  }
}

export const deleteProductReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.PRODUCT_DELETE_REQUEST:
      return {
        ...state,
        loading: true,
      }

    case actionTypes.PRODUCT_DELETE_SUCCESS:
      return {
        ...state,
        resMessage: action.payload.message,
        success: true,
        loading: false,
      }

    case actionTypes.CLEAR_MSG:
      return {
        ...state,
        resMessage: null,
        loading: false,
      }

    case actionTypes.PRODUCT_DELETE_ERROR:
      return {
        ...state,
        error: action.payload,
        loading: false,
      }

    default:
      return state
  }
}
