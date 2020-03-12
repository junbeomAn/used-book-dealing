import React from "react";

import styles from "./PostEditBtn.scss";
import classNames from "classnames/bind";

const cx = classNames.bind(styles);

const PostEditBtn = ({ handleEditToggle, product }) => (
  <div>
    <button
      onClick={() => {
        handleEditToggle(product);
      }}
      className={cx('btn', 'btn-warning', 'edit-btn')}
    >
      수정하기
    </button>
  </div>
);

export default PostEditBtn;
