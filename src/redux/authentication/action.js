import { LOGIN_FAILURE, LOGIN_REQUEST, LOGIN_SUCCESS } from '../actionTypes';
import axios from 'axios';

export const login = (queryParams, toast) => async (dispatch) => {
  try {
    dispatch({ type: LOGIN_REQUEST });
    const res = await axios.post(`https://reqres.in/api/login`, queryParams);

    dispatch({ type: LOGIN_SUCCESS, payload: res.data.token });

    return res.status;
  } catch (err) {
    dispatch({ type: LOGIN_FAILURE, payload: err.message });
  }
};
