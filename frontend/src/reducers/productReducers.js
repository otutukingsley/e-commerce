import * as actionTypes from "../constants/productsConstants.js";

export const initialState = {
  products: [],
  product: { reviews: [] },
  loading: false,
  error: null,
  resMessage: null,
  success: false,
};

export const productListReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.PRODUCT_LIST_REQUEST:
      return {
        ...state,
        loading: true,
      };

    case actionTypes.PRODUCT_LIST_SUCCESS:
      return {
        ...state,
        products: action.payload.products,
        perPage: action.payload.perPage,
        page: action.payload.page,
        pages: action.payload.pages,
        loading: false,
      };

    case actionTypes.PRODUCT_LIST_ERROR:
      return {
        ...state,
        error: action.payload,
        loading: false,
      };

    default:
      return state;
  }
};

export const productDetailsReducer = (
  state = {
    loading: false,
    product: null,
    error: null,
  },
  action
) => {
  switch (action.type) {
    case actionTypes.PRODUCT_DETAILS_REQUEST:
      return {
        ...state,
        loading: true,
      };

    case actionTypes.PRODUCT_DETAILS_SUCCESS:
      return {
        ...state,
        product: action.payload,
        loading: false,
      };

    case actionTypes.PRODUCT_DETAILS_ERROR:
      return {
        ...state,
        error: action.payload,
        loading: false,
      };

    case actionTypes.CLEAR_MSG:
      return {
        loading: false,
        error: null,
        product: null,
      };

    default:
      return state;
  }
};

export const deleteProductReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.PRODUCT_DELETE_REQUEST:
      return {
        ...state,
        loading: true,
      };

    case actionTypes.PRODUCT_DELETE_SUCCESS:
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
        loading: false,
      };

    case actionTypes.PRODUCT_DELETE_ERROR:
      return {
        ...state,
        error: action.payload,
        loading: false,
      };

    default:
      return state;
  }
};

export const createProductReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.PRODUCT_CREATE_REQUEST:
      return {
        ...state,
        loading: true,
      };

    case actionTypes.PRODUCT_CREATE_SUCCESS:
      return {
        ...state,
        resMessage: action.payload.message,
        product: action.payload.product,
        loading: false,
      };

    case actionTypes.CLEAR_MSG:
      return {
        ...state,
        resMessage: null,
        loading: false,
      };

    case actionTypes.PRODUCT_CREATE_ERROR:
      return {
        ...state,
        error: action.payload,
        loading: false,
      };

    default:
      return state;
  }
};

export const updateProductReducer = (
  state = {
    loading: false,
    error: null,
    product: null,
    resMessage: null,
  },
  action
) => {
  switch (action.type) {
    case actionTypes.PRODUCT_UPDATE_REQUEST:
      return {
        ...state,
        loading: true,
      };

    case actionTypes.PRODUCT_UPDATE_SUCCESS:
      return {
        ...state,
        resMessage: action.payload.message,
        product: action.payload.product,
        loading: false,
      };

    case actionTypes.CLEAR_MSG:
      return {
        loading: false,
        error: null,
        product: null,
        resMessage: null,
      };

    case actionTypes.PRODUCT_UPDATE_ERROR:
      return {
        ...state,
        error: action.payload,
        loading: false,
      };

    default:
      return state;
  }
};

export const reviewProductReducer = (
  state = {
    loading: false,
    error: null,
    success: false,
    message: null,
  },
  action
) => {
  switch (action.type) {
    case actionTypes.PRODUCT_REVIEW_REQUEST:
      return {
        ...state,
        loading: true,
      };

    case actionTypes.PRODUCT_REVIEW_SUCCESS:
      return {
        ...state,
        message: action.payload,
        success: true,
        loading: false,
      };

    case actionTypes.PRODUCT_REVIEW_RESET:
      return {
        loading: false,
        error: null,
        success: false,
        message: null,
      };

    case actionTypes.PRODUCT_REVIEW_ERROR:
      return {
        ...state,
        error: action.payload,
        loading: false,
      };

    default:
      return state;
  }
};

export const topProductsReducer = (
  state = {
    loading: false,
    error: null,
    products: [],
  },
  action
) => {
  switch (action.type) {
    case actionTypes.TOP_PRODUCTS_REQUEST:
      return {
        ...state,
        loading: true,
        products: [],
      };

    case actionTypes.TOP_PRODUCTS_SUCCESS:
      return {
        ...state,
        products: action.payload,
        loading: false,
      };

    case actionTypes.TOP_PRODUCTS_ERROR:
      return {
        ...state,
        error: action.payload,
        loading: false,
      };

    default:
      return state;
  }
};
