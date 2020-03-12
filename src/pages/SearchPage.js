import React from "react";

import SearchBar from "components/Search/SearchBar";
import KakaoMap from "components/Search/KakaoMap";
import PostList from "components/Home/List/PostList";
// import PostListContainer from 'containers/PostListContainer';
import SearchWrapper from "components/Search/SearchWrapper";
import Loader from "components/common/Loader";

const style = {
  position: "fixed",
  right: "5rem",
  bottom: "10rem",
  borderRadius: "100%",
  backgroundColor: "white",
  border: "transparent",
  padding: "15px",
  fontSize: '1.2rem',
};

const SearchPage = ({
  searchResult,
  mapMode,
  handleClick,
  handleSearch,
  loading
}) => {
  return (
    <div>
      <SearchWrapper>
        <SearchBar handleSearch={handleSearch} />
        <button onClick={handleClick} style={style}>
          모드<br/>변경
        </button>
        {mapMode ? (
          <KakaoMap searchResult={searchResult} />
        ) : loading ? (
          <Loader />
        ) : (
          <PostList data={searchResult} />
        )}
      </SearchWrapper>
    </div>
  );
};
///// 버튼으로 지도로 보기 / 목록으로 보기 해서 전환 가능케 한다.
export default SearchPage;
