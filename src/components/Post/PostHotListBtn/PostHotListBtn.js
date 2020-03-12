import React from "react";

import styles from "./PostHotListBtn.scss";
import classNames from "classnames/bind";

const cx = classNames.bind(styles);

const style = {
  color: "red"
};
const PostHotListBtn = ({ handleToggleHotList, product }) => (
  <div className={cx('post-hotlist-btn-wrapper')}>
    <button
      onClick={() => {
        const data = {
          Product_id: product[0].id,
          User_id: localStorage.User_id,
          isHotlist: product[0].isHotlist
        };
        handleToggleHotList(data);
      }}
      style={product[0].isHotlist ? style : {}}
      className={cx('post-hotlist-btn')}
    >
      ♥
    </button>
  </div>
);

PostHotListBtn.defaultProps = {
  handleToggleHotList: () => console.warn("no hotlist function!")
};

export default PostHotListBtn;
