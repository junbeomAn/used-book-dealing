import { createAction, handleActions } from "redux-actions";
import axios from "axios";
const url = "http://192.168.64.145";
const port = 3001;

const getPostListApi = () => {
  return axios.get(`${url}:${port}/product/getProductList`);
};
const getOnePostApi = data => {
  return data.User_id
    ? axios.get(`${url}:${port}/product/getProduct?id=${data.id}&User_id=${data.User_id}`)
    : axios.get(`${url}:${port}/product/getProduct?id=${data.id}`);
};
const getHotlistApi = (id) => {
  return axios.get(`${url}:${port}/hotlist/getHotlistList?User_id=${id}`);
}
const searchProductApi = keyword => {
  return axios.get(`${url}:${port}/product/searchProduct?keyword=${keyword}`);
};
const getMyPostApi = id => {
  return axios.get(`${url}:${port}/product/getMyProductList?User_id=${id}`);
};

//action types
const GET_POST_LIST = "GET_POST_LIST";
const GET_ONE_POST = "GET_ONE_POST";
const GET_MY_POST = "GET_MY_POST";
const SEARCH_PRODUCT = "SEARCH_PROUDCT";
const CHANGE_LOADING_STATE = "CHANGE_LOADING_STATE";
const GET_HOTLIST = 'GET_HOTLIST';
//action creators
const getPostListState = createAction(GET_POST_LIST);
const getOnePostState = createAction(GET_ONE_POST);
const getMyPostState = createAction(GET_MY_POST);
const searchProductState = createAction(SEARCH_PRODUCT);
const changeLoadingState = createAction(CHANGE_LOADING_STATE);
const getHotlistState = createAction(GET_HOTLIST);
const initialState = {
  loading: true,
  productList: [],
  commentList: [],
  addresses: [],
  hotlist: [],
};

export const getPostList = () => (dispatch, getState) => {
  return getPostListApi()
    .then(res => {
      // console.log(res,'!@!@!@!@!@')
      dispatch(getPostListState(res));
      // dispatch(changeLoadingState());
    })
    .catch(err => {
      console.log(err);
    });
};
export const getOnePost = data => (dispatch, getState) => {
  return getOnePostApi(data)
    .then(res => {
      dispatch(getOnePostState(res));
    })
    .catch(err => {
      console.log(err);
    });
};
export const getMyPost = id => (dispatch, getState) => {
  return getMyPostApi(id)
    .then(res => {
      dispatch(getMyPostState(res));
    })
    .catch(err => {
      console.log(err);
    });
};


export const getHotlist = (id) => (dispatch, getState) => {
  return getHotlistApi(id)
    .then(res => dispatch(getHotlistState(res)))
    .catch(err => console.log(err));
}
export const searchProduct = keyword => (dispatch, getState) => {
  return searchProductApi(keyword)
    .then(res => {
      dispatch(searchProductState(res));
    })
    .catch(err => {
      throw err;
    });
};
export const changeLoading = () => (dispatch, getState) => {
  dispatch(changeLoadingState());
};

export default handleActions(
  {
    [GET_POST_LIST]: (state, action) => {
      const { productList } = action.payload.data;
      return {
        ...state,
        loading: false,
        productList: productList
      };
    },
    [GET_ONE_POST]: (state, action) => {
      const { loading, product, commentList } = action.payload.data;
      return {
        ...state,
        loading: false,
        productList: [product],
        commentList: commentList
      };
    },
    [GET_MY_POST]: (state, action) => {
      const { productList } = action.payload.data;
      return {
        ...state,
        loading: false,
        productList: productList
      };
    },
    [GET_HOTLIST]: (state, action) => {
      const { hotlist } = action.payload.data;
      console.log(hotlist)
      return {
        ...state,
        productList: hotlist,
        loading: false,
      }
    },
    [SEARCH_PRODUCT]: (state, action) => {
      const { productList, addresses } = action.payload.data;
      return {
        ...state,
        productList: productList,
        addresses: addresses,
        loading: false
      };
    },
    [CHANGE_LOADING_STATE]: (state, action) => {
      return {
        ...state,
        loading: true
      };
    }
  },
  initialState
);
