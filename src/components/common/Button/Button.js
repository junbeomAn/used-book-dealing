import React from 'react';

import styles from './Button.scss';
import classNames from 'classnames/bind';

const cx = classNames.bind(styles);


const Button = () => (
  <div className={cx('button')}>
    <span className={cx('symbol')}>+</span>
    <span className={cx('text')}>팔기</span>
  </div>
);


export default Button;

// 위치등록, 게시글추가 .... 등의 기능 필요