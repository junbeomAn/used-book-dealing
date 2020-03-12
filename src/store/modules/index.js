import { combineReducers } from 'redux';
import base from './base';
import getPostList from './getPostList';
import postComment from './postComment';
import postItem from './postItem';
import toggleResult from './toggleResult';
export default combineReducers({
  base,
  getPostList,
  postComment,
  postItem,
  toggleResult,
});