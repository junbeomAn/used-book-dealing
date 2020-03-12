import React from 'react';
import { Link } from "react-router-dom";

import HeaderShowcase from 'components/common/HeaderShowcase';
import LoginBody from 'components/Login/LoginBody';
import styles from '../components/Login/LoginBody/LoginBody.scss'

import classNames from "classnames/bind";

const cx = classNames.bind(styles);

const LoginPage = ({ isLoggedIn, history, handleSearch, handleLoginBtnClick }) => {
  return (
    <div className={cx('login-body-wrapper')}>
      {/*<HeaderShowcase handleSearch={handleSearch} />*/ }
      <LoginBody handleLoginBtnClick={handleLoginBtnClick}/>
    </div>
  );
}

export default LoginPage;