import React, { Fragment } from "react";

import styles from "./PostComment.scss";
import classNames from "classnames/bind";

const cx = classNames.bind(styles);

const getCommentContents = () => {
  return document.getElementById("post-comment-content").value;
};

const commentsFakeData = [{ content: 1 }, { content: 2 }, { content: 3 }];

const PostComment = ({
  comments = [...commentsFakeData],
  handlePostComment,
  product = {},
  handleGetCommentAndPost,
}) => {
  console.log(product);
 return(
    <div className={cx("post-comment-wrapper")}>
      <textarea id="post-comment-content" />
      <button onClick={() => {
        const commentData = {
          content: getCommentContents(),
          User_id: product[0].User_id,
          Product_id: product[0].id,
        }
        handlePostComment(commentData);
        //등록했으니 새로한번 불러온다.
        setTimeout(() => {
          handleGetCommentAndPost();
        },200);
        
      }}
      className={cx('btn', 'btn-default')}
      >등록</button>    
    {comments.map((item, index) => {
      return <div className={cx("post-comment")} key={index}>{item.content}</div>;
    }).reverse()}
  </div>
  )
  };

export default PostComment;
