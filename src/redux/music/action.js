import {
  GET_MUSIC_SUCCESS,
  MUSIC_FAILURE,
  MUSIC_REQUEST,
} from "../actionTypes";
import axios from "axios";

export const musicRequestAction = () => {
  return { type: MUSIC_REQUEST };
};

export const musicFailureAction = (payload) => {
  return { type: MUSIC_FAILURE, payload };
};

export const musicSuccessAction = (payload) => {
  return { type: GET_MUSIC_SUCCESS, payload };
};

export const getMusic = (queryParams) => async (dispatch) => {
  try {
    dispatch(musicRequestAction());
    const res = await axios.get(`http://localhost:8080/albums`, queryParams);
    dispatch(musicSuccessAction(res.data));
  } catch (err) {
    dispatch(musicFailureAction(err.message));
  }
};
