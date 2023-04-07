import {
  CART_ADD_ITEM,
  CART_REMOVE_ITEM,
  CART_SAVE_SHIPPING_DETAILS,
  CART_SAVE_PAYMENT_METHOD,
} from '../constants/cartConstants'

export const initialState = {
  cartItems: [],
  shippingDetails: {},
  paymentMethod: null,
};

export const cartReducer = (state = initialState, action) => {
  switch (action.type) {
    case CART_ADD_ITEM:
      const item = action.payload

      const existItem = state.cartItems.find(
        (eachItem) => eachItem.product === item.product,
      )

      if (existItem) {
        return {
          ...state,
          cartItems: state.cartItems.map((eachItem) =>
            eachItem.product === existItem.product ? item : eachItem,
          ),
        }
      } else {
        return {
          ...state,
          cartItems: [...state.cartItems, item],
        }
      }

    case CART_REMOVE_ITEM:
      return {
        ...state,
        cartItems: state.cartItems.filter(
          (eachItem) => eachItem.product !== action.payload,
        ),
      }

    case CART_SAVE_SHIPPING_DETAILS:
      return {
        ...state,
        shippingDetails: action.payload,
      }

    case CART_SAVE_PAYMENT_METHOD:
      return {
        ...state,
        paymentMethod: action.payload,
      }

    default:
      return state
  }
}
