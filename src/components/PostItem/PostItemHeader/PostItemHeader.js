import React from 'react';

import styles from './PostItemHeader.scss';
import classNames from 'classnames/bind';
import { Link } from 'react-router-dom';
const cx = classNames.bind(styles);


const PostItemHeader = () => (
  <div className={cx('post-item-header')}>
    <Link to='/'>
      <span>Book Village</span>
    </Link>
    
  </div>
);


export default PostItemHeader;