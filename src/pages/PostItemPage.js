import React from "react";
import PostItemBody from "components/PostItem/PostItemBody";
import PostItemHeader from "components/PostItem/PostItemHeader";
import PostItemImage from "components/PostItem/PostItemImage";

import styles from '../components/PostItem/PostItemBody/PostItemBody.scss';
import classNames from "classnames/bind";
const cx = classNames.bind(styles);

const PostItemPage = ({
  history,
  postItem,
  handleImageUpload,
  photoUrl,
  productData,
  editing,
  handlePostUpdate
}) => {
  return (
    <div className={cx('post-item-body-container')}>
      <PostItemBody
        history={history}
        postItem={postItem}
        handleImageUpload={handleImageUpload}
        photoUrl={photoUrl}
        productData={productData}
        editing={editing}
        handlePostUpdate={handlePostUpdate}
      />
    </div>
  );
};

export default PostItemPage;
