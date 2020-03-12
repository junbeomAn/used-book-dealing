import React, { Component } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import baseActions from 'store/modules/base';

import axios from "axios";

import SignUpPage from "pages/SignUpPage";

const url = "http://192.168.64.145";
const port = 3001;
class SignUpContainer extends Component {

  handleSignUpBtnClick = (signUpData) => {
   
    console.log(signUpData);
    const { history } = this.props;
    axios
      .post(`${url}:${port}/users/signUp`, signUpData)
      .then(res => {
        console.log(res);
        if (res.data.result ==='success') {
          alert('회원가입 성공');
          history.push('/')
        } else {
          alert('문제가 발생하였습니다. 다시 시도해주세요.')
          window.location.reload();
        }
      })
      .catch(err => console.log(err));
  };

  render() {
    const { handleSignUpBtnClick } = this;
    return (
      <div>
        <SignUpPage handleSignUpBtnClick={handleSignUpBtnClick} />
      </div>
    );
  }
}


const mapDispatchToProps = dispatch => ({
  baseActions: bindActionCreators(baseActions, dispatch),
});

export default connect(
  null,
  mapDispatchToProps
)(SignUpContainer);
