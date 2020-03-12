import React, { Component } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import * as baseActions from 'store/modules/base';

import axios from "axios";

import LoginPage from "pages/LoginPage";

const url = "http://192.168.64.145";
const port = 3001;
class LoginContainer extends Component {

  handleLoginBtnClick = (signInData) => {
  
    const { baseActions, history } = this.props;
    axios
      .post(`${url}:${port}/users/login`, signInData)
      .then(res => {
        const { isLoggedIn, user } = res.data;
        if (isLoggedIn) {
          //action 날리기
          // console.log(isLoggedIn);
          // alert(isLoggedIn);
          localStorage.setItem('isLoggedIn', isLoggedIn);
          localStorage.setItem('User_id', user.id); // 유저 아이디 심는다.
          baseActions.changeLoginState();
          history.push('/');
        } else {
          alert('아이디 혹은 비밀번호가 틀렸습니다.');
          window.location.reload();
        }
      })
      .catch(err => console.log(err));
  };

  componentDidMount() {
    const { history } = this.props;
    const isLoggedIn = localStorage.getItem('isLoggedIn');

    if (isLoggedIn && isLoggedIn === 'true') {
      alert('이미 로그인 하셨습니다');
      history.push('/');
    }
  }
  render() {
    const { handleLoginBtnClick } = this;
    return (      
        <LoginPage handleLoginBtnClick={handleLoginBtnClick} />      
    );
  }
}

const mapStateToProps = ({ base }) => ({
  isLoggedIn: base.isLoggedIn,
});

const mapDispatchToProps = dispatch => ({
  baseActions: bindActionCreators(baseActions, dispatch),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(LoginContainer);
