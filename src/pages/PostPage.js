import React, { Fragment } from "react";

import PostComment from "components/Post/PostComment";
import PostBody from "components/Post/PostBody";
import PostImage from "components/Post/PostImage";
import PostInfo from "components/Post/PostInfo";
import PostWrapper from "components/Post/PostWrapper";
import PostItemHeader from "components/PostItem/PostItemHeader";
import PostStateBtn from "components/Post/PostStateBtn";
import PostDeleteBtn from 'components/Post/PostDeleteBtn';
import PostEditBtn from 'components/Post/PostEditBtn';
import PostHotListBtn from 'components/Post/PostHotListBtn';

import styles from '../components/Post/PostWrapper/PostWrapper.scss';
import classNames from 'classnames/bind';


const cx = classNames.bind(styles);

const fakeData = {
  photoUrl: ""
};

const PostPage = ({
  currUserId,
  comments,
  handlePostComment,
  product = fakeData,
  handleGetCommentAndPost,
  handlePostStateBtnClick,
  handleDelBtnClick,
  handleEditToggle,
  handleToggleHotList
}) => {
  return (
    <div className={cx('post-page')}>
      <PostWrapper>
        <PostInfo>
          <PostImage product={product} />
          <PostBody product={product} />
        </PostInfo>
        <div className={cx('post-btns')}>
          {(currUserId === product[0].User_id && product[0].state === '판매중') ? (
            <PostStateBtn handleClick={handlePostStateBtnClick} product={product} />
          ) : null}
          
          {currUserId === product[0].User_id ? (
            <Fragment>
              <PostDeleteBtn handleClick={handleDelBtnClick} product={product}/>
              <PostEditBtn handleEditToggle={handleEditToggle} product={product}/>
            </Fragment>            
          ) : null}
          <PostHotListBtn product={product} handleToggleHotList={handleToggleHotList}/>
          </div>
        <PostComment
          product={product}
          comments={comments}
          handlePostComment={handlePostComment}
          handleGetCommentAndPost={handleGetCommentAndPost}
        />
      </PostWrapper>
    </div>
  );
};

export default PostPage;
