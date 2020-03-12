import React from 'react';

import styles from './PostBody.scss';
import classNames from 'classnames/bind';

const cx = classNames.bind(styles);


const PostBody = ({ product }) => (
  <div className={cx('post-body')}>
    <div className={cx('post-body-location')}><span className={cx('post-body-title')}>책 제목 :  </span><span className={cx('post-body-content')}>{product[0].bookName}</span></div>
    <div className={cx('post-body-location')}><span className={cx('post-body-title')}>책 가격 :  </span><span className={cx('post-body-content')}>{product[0].price}</span></div>
    <div className={cx('post-body-location')}><span className={cx('post-body-title')}>책 저자 :  </span><span className={cx('post-body-content')}>{product[0].author}</span></div>
    <div className={cx('post-body-location')}><span className={cx('post-body-title')}>내 용 :  </span><span className={cx('post-body-content')}>{product[0].content}</span></div>
    <div className={cx('post-body-location')}><span className={cx('post-body-title')}>거래지역 :  </span><span className={cx('post-body-content')}>{product[0].address}</span></div>    
  </div>
);


export default PostBody;