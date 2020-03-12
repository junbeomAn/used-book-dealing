import React from "react";
import { Link } from "react-router-dom";
import styles from "./SignUpBody.scss";
import classNames from "classnames/bind";

const cx = classNames.bind(styles);

const getSignUpData = () => {
  const id = document.getElementById("signup-id").value;
  const email = document.getElementById("signup-email").value;
  const password = document.getElementById("signup-pwd").value;
  const name = document.getElementById("signup-name").value;
  return {
    id,
    email,
    password,
    name
  };
};

const SignUpBody = ({ handleSignUpBtnClick }) => (
  <div className={cx("authContainer")}>
    <div className={cx("loginInputContainer", "border", "rounded")}>
      <div className={cx("authFormContainer")}>
        <div className={cx("form-group")}>
          <div className={cx("input-group", "mb-3")}>
            <div className={cx("input-group-prepend")}>
              <span className={cx("input-group-text", "authInputTitleTag")}>
                이메일
              </span>
            </div>
            <input
              type="text"
              className={cx("form-control")}
              name="email"
              id="signup-email"
              placeholder="Enter ID"
            />
          </div>
        </div>
        <div className={cx("form-group")}>
          <div className={cx("input-group", "mb-3")}>
            <div className={cx("input-group-prepend")}>
              <span className={cx("input-group-text", "authInputTitleTag")}>
                아이디
              </span>
            </div>
            <input
              type="text"
              className={cx("form-control")}
              name="id"
              id="signup-id"
              placeholder="Enter ID"
            />
            </div>
            </div>
            <div className={cx("form-group")}>
            <div className={cx("input-group", "mb-3")}>
            <div className={cx("input-group-prepend")}>
              <span className={cx("input-group-text", "authInputTitleTag")}>
                이름
              </span>
            </div>
            <input
              type="text"
              className={cx("form-control")}
              name="name"
              id="signup-name"
              placeholder="Enter ID"
            />
            </div>
            </div>
            <div className={cx("form-group")}>
            <div className={cx("input-group", "mb-3")}>
            <div className={cx("input-group-prepend")}>
              <span className={cx("input-group-text", "authInputTitleTag")}>
                비밀번호
              </span>
            </div>
            <input
              type="password"
              className={cx("form-control")}
              id="signup-pwd"
              name="password"
              placeholder="Enter Password"
              // onKeyPress={(e) => {
              //   keyPress(e);
              // }}
            />
            </div>
            </div>
          </div>
        </div>
        <button
          onClick={() => {
            const signUpData = getSignUpData();
            handleSignUpBtnClick(signUpData);
          }}
          className={cx("btn", "btn-primary", "authBtn")}
        >
          회원가입
        </button>
      </div>
   
);

export default SignUpBody;
