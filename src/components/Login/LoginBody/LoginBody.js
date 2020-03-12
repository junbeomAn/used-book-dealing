import React from 'react';
import { Divider, Button, Icon } from 'semantic-ui-react';
import { Link } from 'react-router-dom';

import styles from './LoginBody.scss';
import classNames from 'classnames/bind';
import 'semantic-ui-css/semantic.min.css';

const cx = classNames.bind(styles);

const getSignInData = () => {
  const id = document.getElementById('signin-id').value;
  const password = document.getElementById('signin-pwd').value;
  return {
    id,
    password,
  }
}


const LoginBody = ({ handleLoginBtnClick }) => (
  <div className={cx("authContainer")}>
    <div className={cx("loginInputContainer", "border", "rounded")}>
      <div className={cx("authFormContainer")}>
        <div className={cx("form-group")}>
          <div className={cx("input-group", "mb-3")}>
            <div className={cx("input-group-prepend")}>
              <span className={cx("input-group-text", "authInputTitleTag")} id="basic-addon1">
                아이디
              </span>
            </div>
            <input
              type="text"
              className={cx("form-control", "input-id")}
              name="Id"
              id="signin-id"
              placeholder="Enter ID"
            />
          </div>
        </div>
        <div className={cx("form-group")}>
          <div className={cx("input-group", "mb-3")}>
            <div className={cx("input-group-prepend")}>
              <span className={cx("input-group-text", "authInputTitleTag")} id="basic-addon1">
                비밀번호
              </span>
            </div>
            <input
              type="password"
              className={cx("form-control", "input-pwd")}
              name="password"
              id="signin-pwd"
              placeholder="Enter Password"
            />
          </div>
        </div>
        <button
          onClick={() => {
            const signInData = getSignInData();
            handleLoginBtnClick(signInData);
          }}
          className={cx("btn", "btn-primary", "authBtn")}
        >
          로그인
        </button>
      </div>
    </div>
    <div className={cx("border", "rounded", "loginOptionContainer")}>
      <p>
        아직 가입한 계정이 없으신가요? <Link to="/signup">가입</Link>
      </p>
    </div>
  </div>
);

export default LoginBody;

        


