import {
  USER_LOGIN_REQUEST,
  USER_LOGIN_SUCCESS,
  USER_REGISTER_REQUEST,
  USER_REGISTER_SUCCESS,
  USER_REGISTER_ERROR,
  USER_LOGIN_OUT,
  USER_LOGIN_ERROR,
} from '../constants/userConstants'

const initialState = {
  userInfo: null,
  error: null,
  loading: false,
}

export const userLoginReducer = (state = initialState, action) => {
  switch (action.type) {
    case USER_LOGIN_REQUEST:
      return {
        ...state,
        loading: true,
      }

    case USER_LOGIN_SUCCESS:
      return {
        ...state,
        userInfo: action.payload,
        loading: false,
      }

    case USER_LOGIN_ERROR:
      return {
        ...state,
        error: action.payload,
        loading: false,
      }

    case USER_LOGIN_OUT:
      return {
        userInfo: null,
        error: null,
      }

    default:
      return state
  }
}

export const userRegisterReducer = (state = initialState, action) => {
  switch (action.type) {
    case USER_REGISTER_REQUEST:
      return {
        ...state,
        loading: true,
      }

    case USER_REGISTER_SUCCESS:
      return {
        ...state,
        loading: false,
      }

    case USER_REGISTER_ERROR:
      return {
        ...state,
        error: action.payload,
        loading: false,
      }
    default:
      return state
  }
}
