import {
  USER_LOGIN_REQUEST,
  USER_LOGIN_SUCCESS,
  USER_REGISTER_REQUEST,
  USER_REGISTER_SUCCESS,
  USER_REGISTER_ERROR,
  USER_LOGIN_OUT,
  USER_LOGIN_ERROR,
  USER_DETAILS_REQUEST,
  USER_DETAILS_SUCCESS,
  USER_DETAILS_RESET,
  USER_DETAILS_ERROR,
  USER_UPDATE_REQUEST,
  USER_UPDATE_SUCCESS,
  USER_UPDATE_RESET,
  USER_UPDATE_ERROR,
  USERS_LIST_REQUEST,
  USERS_LIST_SUCCESS,
  USERS_LIST_ERROR,
} from "../constants/userConstants"

const initialState = {
  userInfo: null,
  error: null,
  loading: false,
  success: false,
  profile: {},
  users: [],
}

//LOGIN A USER

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

//REGISTER A USER

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

// GET USER PROFILE

export const userDetailsReducer = (state = initialState, action) => {
  switch (action.type) {
    case USER_DETAILS_REQUEST:
      return {
        ...state,
        loading: true,
      }

    case USER_DETAILS_SUCCESS:
      return {
        ...state,
        profile: action.payload,
        loading: false,
      }

    case USER_DETAILS_RESET:
      return {
        ...state,
        profile: {},
      }

    case USER_DETAILS_ERROR:
      return {
        ...state,
        error: action.payload,
        loading: false,
      }
    default:
      return state
  }
}

//UPDATE PROFILE

export const userUpdateReducer = (state = initialState, action) => {
  switch (action.type) {
    case USER_UPDATE_REQUEST:
      return {
        ...state,
        loading: true,
      }

    case USER_UPDATE_SUCCESS:
      return {
        ...state,
        userInfo: action.payload,
        success: true,
        loading: false,
      }

    case USER_UPDATE_RESET:
      return {
        ...state,
        profile: {},
      }

    case USER_UPDATE_ERROR:
      return {
        ...state,
        error: action.payload,
        loading: false,
      }
    default:
      return state
  }
}

//Admin List
export const adminGetUsersListReducer = (state = initialState, action) => {
  switch (action.type) {
    case USERS_LIST_REQUEST:
      return {
        ...state,
        loading: true,
      }

    case USERS_LIST_SUCCESS:
      return {
        ...state,
        users: action.payload,
        loading: false,
      }

    case USERS_LIST_ERROR:
      return {
        ...state,
        error: action.payload,
        loading: false,
      }
    default:
      return state
  }
}
