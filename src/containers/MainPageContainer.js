import React, { Component } from "react";

import { connect } from "react-redux";
import { bindActionCreators } from "redux";

import MainPage from 'pages/MainPage';
import * as baseActions from 'store/modules/base';
import * as getPostListActions from 'store/modules/getPostList';

class MainPageContainer extends Component {
  
  // handleSearch = (e) => {
  //   const { history } = this.props;
  //   const keyword = document.getElementById('search-input').value;
  //   if (e.key === 'Enter') {
  //     console.log('go to search page with keyword : ', e.target.value);
  //     history.push(`/search?keyword=${e.target.value}`);
  //   }
  // }
  componentDidMount() {
    console.log('mainpagecontainer!~!~!~!~!~!');
  }

  render() {
    const { isLoggedIn, history, location } = this.props;
    return (
      <div>
        <MainPage isLoggedIn={isLoggedIn} location={location} history={history} />
      </div>
    );
  }
}

const mapStateToProps = ({ base, getPostList }) => ({
  isLoggedIn: base.isLoggedIn,
  id: base.id,
  email: base.email,
  name: base.name,
  productList: getPostList.productList,
});

const mapDispatchToProps = dispatch => ({
  baseActions: bindActionCreators(baseActions, dispatch),
  getPostListActions: bindActionCreators(getPostListActions, dispatch),
});
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(MainPageContainer);
