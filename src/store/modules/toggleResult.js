import { createAction, handleActions } from "redux-actions";
import axios from "axios";

const port = 3001;
const url = "http://192.168.64.145";

const toggleHotlistApi = data => {
  if (data.isHotlist) {
    return axios.delete(
      `${url}:${port}/hotlist/deleteHotlist?User_id=${
        data.User_id
      }&Product_id=${data.Product_id}`
    );
  } else {
    return axios.post(`${url}:${port}/hotlist/insertHotlist`, data);
  }
};

//action types
const TOGGLE_RESULT = "TOGGLE_RESULT";
const TOGGLE_HOTLIST = "TOGGLE_HOTLIST";

//action creators
const toggleResultState = createAction(TOGGLE_RESULT);
const toggleHotlistState = createAction(TOGGLE_HOTLIST);

const initialState = {
  mapMode: false,
  listed: false
};

export const toggleResult = () => (dispatch, getState) => {
  dispatch(toggleResultState());
};

export const toggleHotlist = data => (dispatch, getState) => {
  return toggleHotlistApi(data)
    .then(res => {
      console.log('what is faster???')
      dispatch(toggleHotlistState(res));
    })
    .catch(err => {
      console.log(err);
    });
};

export default handleActions(
  {
    [TOGGLE_RESULT]: (state, action) => {
      return {
        ...state,
        mapMode: !state.mapMode
      };
    },
    [TOGGLE_HOTLIST]: (state, action) => {
      return {
        ...state,
        listed: !state.listed
      };
    }
  },
  initialState
);
