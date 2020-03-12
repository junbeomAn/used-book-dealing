import { createAction, handleActions } from "redux-actions";
import axios from 'axios';

const port = 3001;
const url = 'http://192.168.64.145';

const checkAuthApi = () => {
  return axios.get(`${url}:${port}/auth`)
};

//action types
const CHECK_AUTH_STATE = "CHECK_AUTH_STATE";
const CHANGE_LOGIN_STATE = "CHANGE_LOGIN_STATE";
const TEMP_CHECK_AUTH = "TEMP_CHECK_AUTH";

//action creators
const checkAuthState = createAction(CHECK_AUTH_STATE);
const changeLoginStateAction = createAction(CHANGE_LOGIN_STATE);
const tempCheckAuthState = createAction(TEMP_CHECK_AUTH);

const initialState = {
  isLoggedIn: false,
  id: null,
  email: null,
  name: null
};

export const checkAuth = () => (dispatch, getState) => {
  return checkAuthApi().then(res => {
    dispatch(checkAuthState(res));
  }).catch(err => {
    console.log(err);
  })
};

export const changeLoginState = () => (dispatch, getState) => {
  dispatch(changeLoginStateAction());
}
export const tempCheckAuth = () => (dispatch, getState) => {
  dispatch(tempCheckAuthState());
}

export default handleActions(
  {
    [CHECK_AUTH_STATE]: (state, action) => {
      const { id, email, name, isLoggedIn } = action.payload.data;
      return {
        ...state,
        isLoggedIn: isLoggedIn,
        id: id,
        email: email,
        name: name
      };
    },
    [CHANGE_LOGIN_STATE]: (state, action) => {
      return {
        ...state,
        isLoggedIn: !state.isLoggedIn,
      }
    },
    [TEMP_CHECK_AUTH] : (state, action) => {
      return {
        ...state,
        isLoggedIn: true,
      }
    } 
  },
  initialState
);
