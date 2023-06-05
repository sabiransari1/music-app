import { LOGIN_FAILURE, LOGIN_REQUEST, LOGIN_SUCCESS } from "../actionTypes";

const initState = {
  isLoading: false,
  isError: false,
  isAuth: false,
  token: "",
  errMessage: "",
};

export const authentication = (state = initState, { type, payload }) => {
  switch (type) {
    case LOGIN_REQUEST: {
      return { ...state, isLoading: true, isError: false };
    }
    case LOGIN_SUCCESS: {
      return { ...state, isLoading: false, isAuth: true, token: payload };
    }
    case LOGIN_FAILURE: {
      return { ...state, isLoading: false, isError: true, errMessage: payload };
    }
    default:
      return state;
  }
};
