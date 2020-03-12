import React from "react";
import { Switch, Route } from "react-router-dom";
import {
  SearchPage,
  PostPage,
  PostItemPage,
  MainPage,
  NotFoundPage
} from "pages";

import MainPageContainer from "containers/MainPageContainer";
import PostItemContainer from "containers/PostItemContainer";
import PostContainer from "containers/PostContainer";
import SearchPageContainer from "containers/SearchPageContainer";
import LoginContainer from "containers/LoginContainer";
import SignUpContainer from "containers/SignUpContainer";
import Base from 'containers/common/Base';
import PostListContainer from "containers/PostListContainer";

const App = () => {
  return (
    <div>
      <Base pathname={window.location.pathname} />
      <Switch>        
        <Route exact path="/" component={MainPageContainer} />
        <Route path="/search" component={SearchPageContainer} />
        <Route path="/post/update/:id" component={PostItemContainer}/>
        <Route path="/post/:id" component={PostContainer} />
        <Route path="/newpost" component={PostItemContainer} />
        <Route path="/login" component={LoginContainer} />
        <Route path="/signup" component={SignUpContainer} />
        <Route path="/mypost" component={PostListContainer} />
        <Route path="/hotlist" component={PostListContainer} />
        <Route component={NotFoundPage} />
      </Switch>      
    </div>
  );
};

export default App;
