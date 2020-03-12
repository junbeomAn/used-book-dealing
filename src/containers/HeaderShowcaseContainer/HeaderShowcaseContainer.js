import React, { Component } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import * as baseActions from "store/modules/base";
import { withRouter } from "react-router-dom";

import styles from "./HeaderShowcaseContainer.scss";
import classNames from "classnames/bind";
import HeaderShowcase from "components/common/HeaderShowcase";
import axios from "axios";

const cx = classNames.bind(styles);

class HeaderShowcaseContainer extends Component {

  handleSearch = e => {
    const { history } = this.props;
    const keyword = document.getElementById("search-input").value;
    if (e.key === "Enter") {
      console.log("go to search page with keyword : ", e.target.value);
      history.push(`/search?keyword=${e.target.value}`);
    }
  };

 
  render() {
    const { handleSearch,  } = this;
    const { isLoggedIn, pathname, handleLogOut } = this.props;
    return (
      <div>
        <HeaderShowcase
          handleSearch={handleSearch}
          handleLogOut={handleLogOut}
          isLoggedIn={isLoggedIn}
          pathname={pathname}
        />
      </div>
    );
  }
}
const mapStateToProps = ({ base }) => ({
  isLoggedIn: base.isLoggedIn
});

const mapDispatchToProps = dispatch => ({
  baseActions: bindActionCreators(baseActions, dispatch)
});
export default withRouter(
  connect(
    mapStateToProps,
    mapDispatchToProps
  )(HeaderShowcaseContainer)
);
