import React from 'react';

import styles from './SearchInput.scss';
import classNames from 'classnames/bind';

const cx = classNames.bind(styles);


const SearchInput = ({ handleSearch, searchData }) => (
  <input type="text" id="search-input" onKeyPress={handleSearch} className={cx('search-input')} placeholder="반경 5km이내에 오만가지 책들이 도사리고 있습니다."/>
);


export default SearchInput;