import React from 'react';
import { Link } from "react-router-dom";

import HeaderShowcase from 'components/common/HeaderShowcase';
import SignUpBody from 'components/SignUp/SignUpBody';
import styles from '../components/SignUp/SignUpBody/SignUpBody.scss'

import classNames from "classnames/bind";

const cx = classNames.bind(styles);

const SignUpPage = ({ isLoggedIn, history, handleSearch, handleSignUpBtnClick }) => {
  return (
    <div className={cx('signup-body-wrapper')}>
      {/*<HeaderShowcase handleSearch={handleSearch} />*/ }      
      <SignUpBody handleSignUpBtnClick={handleSignUpBtnClick}/>
    </div>
  );
}

export default SignUpPage;