import {
  USER_LOGIN_REQUEST,
  USER_LOGIN_SUCCESS,
  USER_LOGIN_LOADED,
  USER_LOGIN_OUT,
  USER_LOGIN_ERROR,
} from '../constants/userConstants'
import axios from 'axios'

export const login = (email, password) => async (dispatch) => {
  try {
    dispatch({
      type: USER_LOGIN_REQUEST,
    })
    const config = {
      headers: {
        'Content-Type': 'application/json',
      },
    }

    const response = await axios.post('/api/users/login', config, {
      email,
      password,
    })

    dispatch({
      type: USER_LOGIN_SUCCESS,
      payload: response.data,
    })

    localStorage.setItem('userInfo', JSON.stringify(response.data))
  } catch (error) {
    dispatch({
      type: USER_LOGIN_ERROR,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    })
  }
}
