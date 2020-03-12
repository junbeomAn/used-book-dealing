import React from 'react';

import styles from './PostDeleteBtn.scss';
import classNames from 'classnames/bind';

const cx = classNames.bind(styles);


const PostDeleteBtn = ({ handleClick, product }) => (
  <div>
    <button className={cx('btn', 'btn-danger', 'delete-btn')} onClick={() => handleClick(product[0].id)}>삭제</button>
  </div>
);


export default PostDeleteBtn;