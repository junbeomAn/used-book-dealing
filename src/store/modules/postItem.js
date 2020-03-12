import { createAction, handleActions } from "redux-actions";
import axios from "axios";


// 게시글 추가, 수정 모듈

const port = 3001;
const url = "http://192.168.64.145";

const postItemApi = productData => {
  return axios.post(`${url}:${port}/product/insertProduct`, productData);
};

const updateItemApi = (productData) => {
  return axios.put(`${url}:${port}/product/updateProduct`, productData)
}

//action types
const POST_ITEM = "POST_ITEM";
const SET_PHOTO_DATA = "SET_PHOTO_DATA";
const UPDATE_ITEM = "UPDATE_ITEM";
const CHANGE_EDITING_STATE = "CHANGE_EDITING_STATE";

//action creators
const postItemState = createAction(POST_ITEM);
const setPhotoDataState = createAction(SET_PHOTO_DATA);
const updateItemState = createAction(UPDATE_ITEM);
const changeEditingState = createAction(CHANGE_EDITING_STATE);

const initialState = {
  photoData: null, 
  editing: false,
};

export const postItem = productData => (dispatch, getState) => {
  return postItemApi(productData)
    .then(res => {
      dispatch(postItemState());
    })
    .catch(err => {
      console.log(err);
    });
};
export const setPhotoData = (formData) => (dispatch, getState) => {
  dispatch(setPhotoDataState(formData));
};
export const updateItem = (productData) => (dispatch, getState) => {
  return updateItemApi(productData)
    .then(res => {
      dispatch(updateItemState());
    })
    .catch(err => {
      console.log(err);
    });
}
export const changeEditing = (productData) => (dispatch, getState) => {
  dispatch(changeEditingState(productData));
};


export default handleActions(
  {
    [POST_ITEM]: (state, action) => {
      console.log(action.payload);
      return {
        ...state,
        productData: action.payload,
      };
    },
    [SET_PHOTO_DATA]: (state, action) => {

      return {
        ...state,
        photoData: action.payload,
      };
    },
    [UPDATE_ITEM]: (state, action) => {
      const { productData} = action.payload.data;
      return {
        ...state,
        productData: productData,
      }
    },
    [CHANGE_EDITING_STATE]: (state, action) => {     
      return {
        ...state,
        editing: !state.editing,
       productData: action.payload,
      }
    }
  },
  initialState
);
