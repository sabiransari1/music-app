import {
  GET_MUSIC_SUCCESS,
  MUSIC_FAILURE,
  MUSIC_REQUEST,
} from '../actionTypes';
import axios from 'axios';

const url = `https://music-app-json-server-sabiransari1.onrender.com`;

export const getMusic = (queryParams) => async (dispatch) => {
  try {
    dispatch({ type: MUSIC_REQUEST });
    const res = await axios.get(`${url}/albums`, queryParams);

    dispatch({ type: GET_MUSIC_SUCCESS, payload: res.data });
  } catch (err) {
    dispatch({ type: MUSIC_FAILURE, payload: err.message });
  }
};
