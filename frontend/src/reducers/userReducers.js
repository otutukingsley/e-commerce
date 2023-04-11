import * as actionTypes from "../constants/userConstants";

const initialState = {
  userInfo: null,
  error: null,
  loading: false,
  success: false,
  profile: null,
  users: [],
  resMessage: null,
};

//LOGIN A USER

export const userLoginReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.USER_LOGIN_REQUEST:
      return {
        ...state,
        loading: true,
      };

    case actionTypes.USER_LOGIN_SUCCESS:
      return {
        ...state,
        userInfo: action.payload,
        loading: false,
      };

    case actionTypes.USER_LOGIN_ERROR:
      return {
        ...state,
        error: action.payload,
        loading: false,
      };

    case actionTypes.USER_LOGIN_OUT:
      return {
        userInfo: null,
        error: null,
      };

    default:
      return state;
  }
};

//REGISTER A USER

export const userRegisterReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.USER_REGISTER_REQUEST:
      return {
        ...state,
        loading: true,
      };

    case actionTypes.USER_REGISTER_SUCCESS:
      return {
        ...state,
        loading: false,
      };

    case actionTypes.USER_REGISTER_ERROR:
      return {
        ...state,
        error: action.payload,
        loading: false,
      };
    default:
      return state;
  }
};

// GET USER PROFILE

export const userDetailsReducer = (
  state = {
    loading: false,
    profile: null,
    error: null,
  },
  action
) => {
  switch (action.type) {
    case actionTypes.USER_DETAILS_REQUEST:
      return {
        ...state,
        loading: true,
      };

    case actionTypes.USER_DETAILS_SUCCESS:
      return {
        ...state,
        profile: action.payload,
        loading: false,
      };

    case actionTypes.USER_DETAILS_RESET:
      return {
        loading: false,
        profile: null,
        error: null,
      };

    case actionTypes.USER_DETAILS_ERROR:
      return {
        ...state,
        error: action.payload,
        loading: false,
      };
    default:
      return state;
  }
};

//UPDATE PROFILE

export const userUpdateReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.USER_UPDATE_REQUEST:
      return {
        ...state,
        loading: true,
      };

    case actionTypes.USER_UPDATE_SUCCESS:
      return {
        ...state,
        userInfo: action.payload,
        success: true,
        loading: false,
      };

    case actionTypes.USER_UPDATE_RESET:
      return {};

    case actionTypes.USER_UPDATE_ERROR:
      return {
        ...state,
        error: action.payload,
        loading: false,
      };
    default:
      return state;
  }
};

//Admin List
export const adminGetUsersListReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.USERS_LIST_REQUEST:
      return {
        ...state,
        loading: true,
      };

    case actionTypes.USERS_LIST_SUCCESS:
      return {
        ...state,
        users: action.payload,
        loading: false,
      };

    case actionTypes.USERS_LIST_ERROR:
      return {
        ...state,
        error: action.payload,
        loading: false,
      };
    case actionTypes.USERS_LIST_RESET:
      return {
        users: [],
      };
    default:
      return state;
  }
};

//Admin DELETE
export const adminDeleteUserReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.USER_DELETE_REQUEST:
      return {
        ...state,
        loading: true,
      };

    case actionTypes.USER_DELETE_SUCCESS:
      return {
        ...state,
        resMessage: action.payload.message,
        success: true,
        loading: false,
      };

    case actionTypes.CLEAR_MSG:
      return {
        ...state,
        resMessage: null,
        success: false,
        loading: false,
      };

    case actionTypes.USER_DELETE_ERROR:
      return {
        ...state,
        error: action.payload,
        loading: false,
      };

    default:
      return state;
  }
};

export const adminEditUserReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.USER_EDIT_REQUEST:
      return {
        ...state,
        loading: true,
      };

    case actionTypes.USER_EDIT_SUCCESS:
      return {
        ...state,
        resMessage: action.payload,
        success: true,
        loading: false,
      };

    case actionTypes.CLEAR_MSG:
      return {
        ...state,
        resMessage: null,
        success: false,
        loading: false,
      };

    case actionTypes.USER_EDIT_ERROR:
      return {
        ...state,
        error: action.payload,
        loading: false,
      };
    case actionTypes.USER_EDIT_RESET:
      return {
        profile: null,
        success: false,
      };

    default:
      return state;
  }
};
