import React, { Component } from "react";
import { connect } from "react-redux";
import classNames from "classnames/bind";
import { bindActionCreators } from "redux";

import styles from "../components/Home/List/PostList/PostList.scss";
import PostList from "components/Home/List/PostList";
import * as getPostListActions from "store/modules/getPostList";
import Loader from "components/common/Loader";

const cx = classNames.bind(styles);

class PostListContainer extends Component {

  loadList = () => {
    const { getPostListActions } = this.props;
    const pathname = window.location.pathname;
    const User_id = localStorage.getItem('User_id');
    // console.log(User_id);
    if (pathname === '/mypost') { 
      console.log(pathname);    
      getPostListActions
        .getMyPost(User_id)
        .then(res => {
          console.log(res)
        })
        .catch(err => console.log(err));
    } else if (pathname === '/hotlist') {
      console.log(pathname);
      getPostListActions
        .getHotlist(User_id)
        .then(res => {
          console.log(res);
        })
        .catch(err => console.log(err));
    } else {
      getPostListActions
        .getPostList()
        .then(res => {
          console.log(res, "@@@@@@@@@");
        })
        .catch(err => console.log(err));
    }
  };

  handlePostClick = id => {
    const { history } = this.props;
    history.push(`/post/${id}`);
  };

  componentDidMount() {
    let container = this;

    const { getPostListActions } = this.props;
    getPostListActions.changeLoading(); // 로딩상태 true로 

    setTimeout(() => {
      container.loadList();
      console.log("one second past");
    }, 500);
    
    console.log(this.props);
    console.log('postlistconatiner didmount!!!!')
  }

  componentDidUpdate(prevProps, prevState) {
    const prevPath = prevProps.location.pathname;
    const currPath = this.props.location.pathname;
    if(prevPath !== currPath) {
      this.loadList()
    }    
  }
 
  componentWillUnmount() {
    const { getPostListActions } = this.props;
    getPostListActions.changeLoading();
  }

  render() {
    const { handlePostClick } = this;
    const { productList, history, loading } = this.props;

    return (
      <div>
        {loading ? (
          <Loader />
        ) : (
          <PostList
            data={productList}
            history={history}
            handleClick={handlePostClick}
          />
        )}
      </div>
    );
  }
}

const mapStateToProps = ({ getPostList, }) => ({
  productList: getPostList.productList,
  loading: getPostList.loading,
});

const mapDispatchToProps = dispatch => ({
  getPostListActions: bindActionCreators(getPostListActions, dispatch),
});
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(PostListContainer);
