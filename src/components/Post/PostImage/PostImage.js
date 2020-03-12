import React from 'react';

import styles from './PostImage.scss';
import classNames from 'classnames/bind';

const cx = classNames.bind(styles);
const url = 'http://192.168.64.145';
const port = 3001;


const PostImage = ({ product }) => (
  <div className={cx('post-image')}>
    <img src={`${url}:${port}/${product[0].photoUrl}`} style={{"maxHeight":"100%", "maxWidth":"99%"}} alt="bookPhoto"/>
    {product[0].state !== '판매중' && <div className={cx('deal-finished')}>거래완료 된 상품입니다.</div>}
  </div>
);


export default PostImage;