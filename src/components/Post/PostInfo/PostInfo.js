import React from 'react';

import styles from './PostInfo.scss';
import classNames from 'classnames/bind';

const cx = classNames.bind(styles);


const PostInfo = ({children}) => (
  <div className={cx('post-info')}>
    {children}
  </div>
);


export default PostInfo;