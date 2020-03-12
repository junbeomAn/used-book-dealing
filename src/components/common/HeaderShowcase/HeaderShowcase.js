import React from "react";

import styles from "./HeaderShowcase.scss";
import SearchInput from "components/common/SearchInput";
import classNames from "classnames/bind";
import { Link } from "react-router-dom";

const cx = classNames.bind(styles);

const HeaderShowcase = ({ handleSearch, handleLogOut, isLoggedIn, pathname }) => (
  <div className={cx("header-showcase")}>
    {isLoggedIn ? (
      <div className={cx("main-menubar")}>
        <Link to="/mypost">
          <span className={cx("to-mypage")}>내 거래목록</span>
        </Link>
        <span className={cx("menu-divider")}>|</span>
        <Link to="/hotlist">
          <span className={cx("to-hotlist")}>관심상품</span>
        </Link>
        <span className={cx("menu-divider")}>|</span>
        <Link to="/">
          <span className={cx("logout")} onClick={handleLogOut} >로그아웃</span>
        </Link>
      </div>
    ) : (
      <div className={cx("main-menubar")}>
        <Link to="/login">
          <span className={cx("to-loginpage")}>로그인</span>
        </Link>
        <span className={cx("menu-divider")}>|</span>
        <Link to="/signup">
          <span className={cx("to-signuppage")}>회원가입</span>
        </Link>
      </div>
    )}
    <Link to="/" className={cx("to-home")}>
      <span className={cx("title")}>Book Village</span>
    </Link>
    {pathname === "/" ? (
      <span className={cx("showcase-content")}>
        Find your book, buy it with only 2 bucks,
        <br />
        <br /> and go to class.
      </span>
    ) : null}
    {pathname === "/" ? <SearchInput handleSearch={handleSearch} /> : null}
    <div className={cx("showcase")}>
      <img
        src="http://www.peopleciety.com/wp/wp-content/uploads/2017/08/books-2562331_960_720-%EB%8F%84%EC%84%9C%EA%B4%80-%EC%B1%85.jpg"
        alt="showcase"
      />
    </div>
  </div>
);

export default HeaderShowcase;
