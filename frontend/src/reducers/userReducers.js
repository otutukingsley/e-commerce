import {
  USER_LOGIN_REQUEST,
  USER_LOGIN_SUCCESS,
  USER_LOGIN_LOADED,
  USER_LOGIN_OUT,
  USER_LOGIN_ERROR,
} from '../constants/userConstants'

const initialState = {
  userInfo: {},
  error: null,
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
        userInfo: {},
        error: null,
      }

    default:
      return state
  }
}
