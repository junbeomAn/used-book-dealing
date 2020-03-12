import React from 'react';
import HeaderShowcase from 'components/common/HeaderShowcase';
import ListWrapper from 'components/Home/List/ListWrapper';
// import PostList from 'components/Home/List/PostList';
import Button from 'components/common/Button';
import { Link } from "react-router-dom";
import PostListContainer from 'containers/PostListContainer';
import HeaderShowcaseContainer from 'containers/HeaderShowcaseContainer';

const MainPage = ({ isLoggedIn, history, handleSearch, location }) => {
  return (
    <div>
  {/*<HeaderShowcaseContainer handleSearch={handleSearch} />*/}
      <PostListContainer history={history} location={location}/>      
         
    </div>
  );
}

export default MainPage;