import React from 'react';

import styles from './SearchWrapper.scss';
import classNames from 'classnames/bind';

const cx = classNames.bind(styles);


const SearchWrapper = ({children}) => (
  <div className={cx('search-wrapper')}>
    {children}
  </div>
);


export default SearchWrapper;