import { LOGIN_FAILURE, LOGIN_REQUEST, LOGIN_SUCCESS } from "../actionTypes";

export const loginRequestAction = () => {
  return { type: LOGIN_REQUEST };
};

export const loginSuccessAction = (payload) => {
  return { type: LOGIN_SUCCESS, payload };
};

export const loginFailureAction = (payload) => {
  return { type: LOGIN_FAILURE, payload };
};

export const login = (queryParams) => async (dispatch) => {
  try {
    dispatch(loginRequestAction());
    const res = await axios.get(`https://reqres.in/api/login`, queryParams);
    dispatch(loginSuccessAction(res.data.token));
  } catch (err) {
    dispatch(loginFailureAction(err.message));
  }
};
