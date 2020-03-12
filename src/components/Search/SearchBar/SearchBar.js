import React from 'react';

import styles from './SearchBar.scss';
import classNames from 'classnames/bind';
import SearchInput from 'components/common/SearchInput';
const cx = classNames.bind(styles);


const SearchBar = ({ handleSearch }) => (
  <SearchInput handleSearch={handleSearch}/>
);


export default SearchBar;