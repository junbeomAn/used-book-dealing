import { createAction, handleActions } from "redux-actions";
import axios from 'axios';

const port = 3001;
const url = 'http://192.168.64.145';
const postCommentApi = ({ content, Product_id, User_id }) => {
  return axios.post(`${url}:${port}/comments`, {
    content: content,
    User_id: User_id,
    Product_id: Product_id, 
  })
};

const getCommentApi = (Product_id) => {
  return axios.get(`${url}:${port}/comments/${Product_id}`)
};

//action types
const POST_COMMENT = "POST_COMMENT";
const POST_COMMENT_LOCAL = "POST_COMMENT_LOCAL";
const GET_COMMENT = "GET_COMMENT";

//action creators
const postCommentState = createAction(POST_COMMENT);
const postCommentLocalState = createAction(POST_COMMENT_LOCAL);
const getCommentState = createAction(GET_COMMENT);

const initialState = {
  loading: false,
  comments: [],
  comments_local: [],
};

export const postComment = (commentData) => (dispatch, getState) => {
  return postCommentApi(commentData).then(res => {
    dispatch(postCommentState(res));
  }).catch(err => {
    console.log(err);
  })
};
export const postCommentLocal = (contents) => (dispatch, getState) => {
  dispatch(postCommentLocalState(contents));
}

export const getComment = (id) => (dispatch, getState) => {
  return getCommentApi(id).then(res => {
    dispatch(getCommentState(res));
  }).catch(err => {
    console.log(err);
  })
}

export default handleActions(
  {
    [POST_COMMENT]: (state, action) => {
      const { loading, comments } = action.payload.data;
      return {
        ...state,
        comments: comments,
      };
    },
    [POST_COMMENT_LOCAL]: (state, action) => {
      const { loading } = action.payload;
      return {
        ...state,
        comments_local: [{ content: action.payload }],
      };
    },
    [GET_COMMENT]: (state, action) => {
      const { loading, comment } = action.payload;
      return {
        ...state,
        comments: comment,
      };
    },
  },
  initialState
);
