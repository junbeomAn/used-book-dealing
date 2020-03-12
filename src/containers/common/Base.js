import React, { Component } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { Link } from 'react-router-dom';

import * as baseActions from "store/modules/base";
import HeaderShowcaseContainer from 'containers/HeaderShowcaseContainer';
import HeaderShowcase from "../../components/common/HeaderShowcase/HeaderShowcase";
import Button from 'components/common/Button';

class Base extends Component {
 
  initialize = () => {
    const { baseActions } = this.props;
    if (localStorage.getItem("isLoggedIn") === "true") {
      // store에 로그인 상태 true
      console.log('trueeee');
      baseActions.tempCheckAuth();
    }
    console.log('initialize');
    // baseActions
    //   .checkAuth()
    //   .then(res => {
    //     console.log(res, " : response");
    //   })
    //   .catch(err => console.log(err));
  };
  
  handleLogOut = () => {
    const { baseActions } = this.props;
    baseActions.changeLoginState();
    localStorage.removeItem('isLoggedIn');
    localStorage.removeItem('User_id'); // 유저 아이디 심는다.

  }

  componentDidMount() {
    this.initialize();    
  }

  render() {
    const { handleLogOut } = this;
    const { isLoggedIn, pathname } = this.props;
    console.log(isLoggedIn);
    return (
      <div>
        <HeaderShowcaseContainer isLoggedIn={isLoggedIn} handleLogOut={handleLogOut} pathname={pathname} />
        {(pathname !== '/newpost') 
          && 
          <Link to='/newpost'>
            <Button />
          </Link>
        }
           
      </div>
    );
  }
}

const mapStateToProps = ({ base }) => ({
  isLoggedIn: base.isLoggedIn,
});

const mapDispatchToProps = dispatch => ({
  baseActions: bindActionCreators(baseActions, dispatch)
});
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Base);
