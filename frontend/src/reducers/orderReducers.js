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
  GET_MY_ORDERS_REQUEST,
  GET_MY_ORDERS_SUCCESS,
  GET_MY_ORDERS_ERROR,
  GET_MY_ORDERS_RESET,
  GET_ALL_ORDERS_REQUEST,
  GET_ALL_ORDERS_SUCCESS,
  GET_ALL_ORDERS_ERROR,
  DELIVER_ORDER_REQUEST,
  DELIVER_ORDER_SUCCESS,
  DELIVER_ORDER_ERROR,
  DELIVER_ORDER_RESET,
} from "../constants/orderConstants";

export const orderCreatedReducer = (state = {}, action) => {
  switch (action.type) {
    case ORDER_CREATE_REQUEST:
      return {
        ...state,
        loading: true,
      };

    case ORDER_CREATE_SUCCESS:
      return {
        ...state,
        loading: false,
        success: true,
        order: action.payload,
      };

    case ORDER_CREATE_ERROR:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };

    default:
      return state;
  }
};

export const orderRetrievedReducer = (
  state = { loading: true, orderItems: [], shippingDetails: {} },
  action
) => {
  switch (action.type) {
    case ORDER_RETRIEVE_REQUEST:
      return {
        ...state,
        loading: true,
      };

    case ORDER_RETRIEVE_SUCCESS:
      return {
        ...state,
        loading: false,
        order: action.payload,
      };

    case ORDER_RETRIEVE_ERROR:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };

    default:
      return state;
  }
};

export const orderPayReducer = (state = { success: false }, action) => {
  switch (action.type) {
    case ORDER_PAY_REQUEST:
      return {
        loading: true,
      };

    case ORDER_PAY_SUCCESS:
      return {
        loading: false,
        success: true,
      };

    case ORDER_PAY_ERROR:
      return {
        loading: false,
        error: action.payload,
      };

    case ORDER_PAY_RESET:
      return {};
    default:
      return state;
  }
};

export const myOrdersReducer = (state = { orders: [] }, action) => {
  switch (action.type) {
    case GET_MY_ORDERS_REQUEST:
      return {
        ...state,
        loading: true,
      };

    case GET_MY_ORDERS_SUCCESS:
      return {
        ...state,
        loading: false,
        orders: action.payload,
      };

    case GET_MY_ORDERS_ERROR:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };

    case GET_MY_ORDERS_RESET:
      return {
        orders: [],
      };

    default:
      return state;
  }
};

export const allOrdersReducer = (
  state = {
    loading: false,
    orders: [],
    error: null,
  },
  action
) => {
  switch (action.type) {
    case GET_ALL_ORDERS_REQUEST:
      return {
        ...state,
        loading: true,
      };

    case GET_ALL_ORDERS_SUCCESS:
      return {
        ...state,
        loading: false,
        orders: action.payload,
      };

    case GET_ALL_ORDERS_ERROR:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };

    default:
      return state;
  }
};

export const orderDeliverReducer = (
  state = {
    loading: false,
    error: null,
    sucess: false,
  },
  action
) => {
  switch (action.type) {
    case DELIVER_ORDER_REQUEST:
      return {
        loading: true,
      };

    case DELIVER_ORDER_SUCCESS:
      return {
        loading: false,
        success: true,
      };

    case DELIVER_ORDER_ERROR:
      return {
        loading: false,
        error: action.payload,
      };

    case DELIVER_ORDER_RESET:
      return {
        loading: false,
        error: null,
        sucess: false,
      };
      
    default:
      return state;
  }
};
