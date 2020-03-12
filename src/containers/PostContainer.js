import React, { Component } from "react";
import axios from "axios";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";

import * as postItemActions from "store/modules/postItem";
import * as postCommentActions from "store/modules/postComment";
import * as getPostListActions from "store/modules/getPostList";
import * as toggleResultActions from "store/modules/toggleResult";

import PostPage from "pages/PostPage";
import PostItemContainer from "containers/PostItemContainer";
import Loader from 'components/common/Loader';

const url = "http://192.168.64.145";
const port = 3001;

class PostContainer extends Component {
  handlePostComment = commentData => {
    const { postCommentActions } = this.props;
    console.log(commentData, 'commmentdata');
    postCommentActions
      .postComment(commentData)
      .then(res => {
        console.log(res);
      })
      .catch(err => console.log(err));
    // postCommentActions.postCommentLocal(contents);
  };

  handleGetCommentAndPost = () => {
    const { getPostListActions, match } = this.props;
    const User_id = localStorage.getItem('User_id');
    const data = {
      User_id,
      id: match.params.id,
    }
    getPostListActions
      .getOnePost(data)
      .then(res => {
        console.log(res);
      })
      .catch(err => {
        console.log(err);
      });
  };

  handlePostStateBtnClick = id => {
    // 서버단에서 완료 표시를 해줘야하므로 스토어 이용 x
    if (window.confirm("해당 거래를 완료하시겠습니까?")) {
      const data = {
        state: '판매완료',
        id: id,
      }
      axios
        .put(`${url}:${port}/product/updateProductState`, data)
        .then(res => {
          console.log(res);
          window.location.reload(); // 판매 state 바꿔주기 위해.
        })
        .catch(err => console.log(err));
    }
  };

  handleDelBtnClick = id => {
    const { history } = this.props;
    if (window.confirm("글을 삭제 하시겠습니까?")) {
      const data = { id: id }
      axios.post(`${url}:${port}/product/deleteProduct`, data).then(res => {
        console.log(res);
        alert("글이 삭제 되었습니다.");
        history.push("/"); /// 새로고침 안해도 삭제완료된 리스트 뜨는지 확인.
      }).catch(err => {
        console.log(err);
      })
    }
  };

  handleEditToggle = (product) => {
    const { history } = this.props;
    // editing state를 풀어주기도 해야하므로
    const { postItemActions } = this.props;
    postItemActions.changeEditing(product[0]); // eidting 상태 바꿔주고 기존 정보 store에 저장
    localStorage.setItem('Product_id', product[0].id);
    history.push(`/post/update/${product[0].id}`)
  };

  handleToggleHotList = (data) => {
    const { toggleResultActions } = this.props;
    console.log('toggle_hotlist');
    toggleResultActions
      .toggleHotlist(data)
      .then(res => {
        this.handleGetCommentAndPost();
        console.log(res);
      })
      .catch(err => {
        console.log(err);
      });
    
  }

  componentDidMount() {
    let container = this;
    setTimeout(() => {
      container.handleGetCommentAndPost();
    }, 200);    
  }
  componentWillUnmount() {
    const { getPostListActions } = this.props;
    getPostListActions.changeLoading();
  }

  // componentDidUpdate(prevProps, prevState) {
  //   if (prevProps.comments.length !== this.props.comments.length) {
  //     this.forceUpdate();
  //   }
  // }

  render() {
    const {
      handlePostComment,
      handleGetCommentAndPost,
      handlePostStateBtnClick,
      handleDelBtnClick,
      handleEditToggle,
      handleToggleHotList
    } = this;
    const { comments, product, editing, history, loading } = this.props;
    const userId = localStorage.getItem("User_id"); //현재 사용자의 아이디    
    console.log(product, '!!!!!!!!!!!!!!!!!!!!!!');
    return (
      <div>
        {
          loading ? <Loader /> :
          <PostPage
            currUserId={userId}
            comments={comments}
            product={product}
            editing={editing}
            handleToggleHotList={handleToggleHotList}
            handleGetCommentAndPost={handleGetCommentAndPost}
            handlePostComment={handlePostComment}
            handleDelBtnClick={handleDelBtnClick}
            handlePostStateBtnClick={handlePostStateBtnClick}
            handleEditToggle={handleEditToggle}
          />
         }
      </div> // comments 둘다 배열이면 길이 비교해서 큰 걸 흘려보내도됨.
    );
  }
}

const mapStateToProps = ({ postComment, getPostList, postItem, toggleResult }) => ({
  comments: getPostList.commentList,
  product: getPostList.productList,
  loading: getPostList.loading,
  comments_local: postComment.comments_local,
  editing: postItem.editing,
  listed: toggleResult.listed,
  hotlist: toggleResult.hotlist,
  // newComments: postComment.comments,
});

const mapDispatchToProps = dispatch => ({
  postCommentActions: bindActionCreators(postCommentActions, dispatch),
  getPostListActions: bindActionCreators(getPostListActions, dispatch),
  getCommentActions: bindActionCreators(postCommentActions, dispatch),
  postItemActions: bindActionCreators(postItemActions, dispatch),
  toggleResultActions: bindActionCreators(toggleResultActions, dispatch),
});
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(PostContainer);
