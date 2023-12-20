import {
  GET_MUSIC_SUCCESS,
  MUSIC_FAILURE,
  MUSIC_REQUEST,
} from '../actionTypes';

const initState = {
  isLoading: false,
  isError: false,
  errMessage: '',
  albums: new Array(),
};

export const music = (state = initState, { type, payload }) => {
  switch (type) {
    case MUSIC_REQUEST: {
      return { ...state, isLoading: true, isError: false };
    }
    case MUSIC_FAILURE: {
      return { ...state, isLoading: false, isError: true, errMessage: payload };
    }
    case GET_MUSIC_SUCCESS: {
      return {
        ...state,
        isLoading: false,
        albums: [...state.albums, ...payload],
      };
    }
    default:
      return state;
  }
};
