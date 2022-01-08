import { CART_ADD_ITEM, CART_REMOVE_ITEM } from '../constants/cartConstants'

export const initialState = {
  cartItems: [],
}

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

    default:
      return state
  }
}
