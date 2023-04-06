import { createStore, combineReducers, applyMiddleware } from "redux"
import thunk from "redux-thunk"
import { composeWithDevTools } from "redux-devtools-extension"
import {
  productListReducer,
  productDetailsReducer,
  deleteProductReducer,
  createProductReducer,
  updateProductReducer,
} from "./reducers/productReducers"
import { cartReducer } from "./reducers/cartReducers"
import {
  orderCreatedReducer,
  orderRetrievedReducer,
  orderPayReducer,
  myOrdersReducer,
} from "./reducers/orderReducers"
import {
  userLoginReducer,
  userRegisterReducer,
  userDetailsReducer,
  userUpdateReducer,
  adminGetUsersListReducer,
  adminDeleteUserReducer,
  adminEditUserReducer,
} from "./reducers/userReducers"

const reducer = combineReducers({
  productList: productListReducer,
  productDetail: productDetailsReducer,
  cart: cartReducer,
  userLogin: userLoginReducer,
  userRegister: userRegisterReducer,
  userDetails: userDetailsReducer,
  userUpdate: userUpdateReducer,
  orderCreated: orderCreatedReducer,
  orderRetrieved: orderRetrievedReducer,
  orderPay: orderPayReducer,
  myOrders: myOrdersReducer,
  adminGetUsersList: adminGetUsersListReducer,
  adminDeleteUser: adminDeleteUserReducer,
  adminEditUser: adminEditUserReducer,
  deleteProduct: deleteProductReducer,
  createProduct: createProductReducer,
  updateProduct: updateProductReducer,
})

const cartItemsFromStorage = localStorage.getItem("cartItems")
  ? JSON.parse(localStorage.getItem("cartItems"))
  : []

const userInfoFromStorage = localStorage.getItem("userInfo")
  ? JSON.parse(localStorage.getItem("userInfo"))
  : null

const shippingDetailsFromStorage = localStorage.getItem("shippingDetails")
  ? JSON.parse(localStorage.getItem("shippingDetails"))
  : {}

const paymentMethodFromStorage = localStorage.getItem("paymentMethod")
  ? localStorage.getItem("paymentMethod")
  : null

const initialState = {
  cart: {
    cartItems: cartItemsFromStorage,
    shippingDetails: shippingDetailsFromStorage,
    paymentMethod: paymentMethodFromStorage,
  },
  userLogin: {
    userInfo: userInfoFromStorage,
  },
}

const middleware = [thunk]

const store = createStore(
  reducer,
  initialState,
  composeWithDevTools(applyMiddleware(...middleware))
)

export default store
