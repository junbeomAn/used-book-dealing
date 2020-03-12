import React from 'react';

import styles from './PostItemImage.scss';
import classNames from 'classnames/bind';
import addImage from 'source/add-image.JPG';

const cx = classNames.bind(styles);


const PostItemImage = () => (
  <div className={cx('post-item-image')}>
    <img src={addImage} id="input-img" style={{"maxHeight":"100%", "maxWidth":"99%"}} alt="+"/>   
  </div>
);


export default PostItemImage;