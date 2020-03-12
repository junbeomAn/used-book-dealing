import React from 'react';

import styles from './PostStateBtn.scss';
import classNames from 'classnames/bind';

const cx = classNames.bind(styles);


const PostStateBtn = ({ handleClick, product }) => (
  <div>
    <button className={cx("btn", "btn-success", 'state-btn')} onClick={() => handleClick(product[0].id)}>거래완료</button>
  </div>
);


export default PostStateBtn;