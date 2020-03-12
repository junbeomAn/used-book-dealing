import React, { Component } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import queryString from 'query-string';
import { Link } from 'react-router-dom';

import SearchPage from "pages/SearchPage";
import * as getPostListActions from "store/modules/getPostList";
import * as toggleResultActions from "store/modules/toggleResult";

const myAddress = [
  "부산 사상구 주례로 79",
  "부산 사상구 주례로 47",
  "부산광역시 사상구 가야대로 326"
];
const price = ["20000원", "22000원", "21500원"];

/*global daum*/
/*eslint no-loop-func: 0 */

class SearchPageContainer extends Component {

  fetchMapFromApi = () => {
    const { getPostListActions, history, productList, address } = this.props;
    console.log(productList, address);
    var mapContainer = document.getElementById("Kakao-map"), // 지도를 표시할 div
      mapOption = {
        center: new daum.maps.LatLng(33.450701, 126.570667), // 지도의 중심좌표
        level: 4 // 지도의 확대 레벨
      };

    // 지도를 생성합니다
    var map = new daum.maps.Map(mapContainer, mapOption);
    var imageSrc =
      "http://t1.daumcdn.net/localimg/localimages/07/mapapidoc/markerStar.png";
    // 주소-좌표 변환 객체를 생성합니다
    var geocoder = new daum.maps.services.Geocoder();
    for (let i = 0; i < address.length; i++) {
      // 마커 이미지의 이미지 크기 입니다
      var imageSize = new daum.maps.Size(24, 35);

      // 마커 이미지를 생성합니다
      var markerImage = new daum.maps.MarkerImage(imageSrc, imageSize);
      // 주소로 좌표를 검색합니다
      geocoder.addressSearch(address[i], function(result, status) {
        
        // 정상적으로 검색이 완료됐으면
        if (status === daum.maps.services.Status.OK) {
          var coords = new daum.maps.LatLng(result[0].y, result[0].x);
          console.log(result);
          // 결과값으로 받은 위치를 마커로 표시합니다
          var marker = new daum.maps.Marker({
            map: map,
            position: coords,
            image: markerImage // 마커 이미지
          });

          // 인포윈도우로 장소에 대한 설명을 표시합니다
          var infowindow = new daum.maps.InfoWindow({
            content: `<div style="width:150px;text-align:center;padding:6px 0;">${
              productList[i].price
            }</div>`
          });
          infowindow.open(map, marker);
          daum.maps.event.addListener(marker, 'click', function() {
            history.push(`/post/${productList[i].id}`)
          });
          // 지도의 중심을 결과값으로 받은 위치로 이동시킵니다
          map.setCenter(coords);
        }
      });
    }
    getPostListActions.changeLoading();
    getPostListActions.changeLoading();
  };

  searchKeyword = keyword => { // 실제 통신으로 검색 수행
    const { getPostListActions, history } = this.props;
    // getPostListActions
    //   .getPostList()
    //   .then(res => {
    //     console.log(res, "@@@@@@@@@");
    //   })
    //   .catch(err => console.log(err));
    getPostListActions
      .searchProduct(keyword)
      .then(res => {
        console.log(res);
        history.push(`/search?keyword=${keyword}`);
      })
      .catch(err => {
        console.log(err);
      });
  };

  handleSearch = e => { // 엔터 시 검색 행위 수행
    const keyword = document.getElementById("search-input").value;
    if (e.key === "Enter") {
      console.log("go to search page with keyword : ", e.target.value);
      this.searchKeyword(e.target.value);
    }
  };

  handleModeChangeClick = () => {
    const { toggleResultActions, mapMode, getPostListActions } = this.props;
    toggleResultActions.toggleResult();
    getPostListActions.changeLoading();
    const container = this;
    if (mapMode !== true) { // 검색결과 뷰가 mapMode로 다시 돌아올 때만 동작
      setTimeout(() => { // 컴포넌트 렌더링을 먼저하고 daum api fetch를 해야 하므로 함수 걸어줌.
        container.fetchMapFromApi();
      }, 0);
    } else {
      const { location } = this.props;
      const query = queryString.parse(location.search);
      const keyword = query.keyword; // 모드 바꾸면 다시 검색수행해야하나? 그러면 로딩도 띄워야함 settimeout으로

      setTimeout(() => {
        container.searchKeyword(keyword);
      }, 300)      
    }
  };

 componentDidMount() {
   console.log('mount')
    const { location } = this.props;
    const container = this;
    const query = queryString.parse(location.search);
    const keyword = query.keyword;
    this.searchKeyword(keyword);
 
  }
  componentWillUnmount() {
    const { toggleResultActions, mapMode } = this.props;
    mapMode && toggleResultActions.toggleResult();
  }

  render() {
    const { productList, mapMode, loading, address } = this.props;
    const { handleModeChangeClick, handleSearch } = this;
    console.log(productList, address);
    return (
      <div>
        <SearchPage
          searchResult={productList}
          handleClick={handleModeChangeClick}
          handleSearch={handleSearch}
          mapMode={mapMode}
          loading={loading}
        />
      </div>
    );
  }
}

const mapStateToProps = ({ getPostList, toggleResult }) => ({
  productList: getPostList.productList,
  address: getPostList.addresses,
  loading: getPostList.loading,
  mapMode: toggleResult.mapMode,
});

const mapDispatchToProps = dispatch => ({
  getPostListActions: bindActionCreators(getPostListActions, dispatch),
  toggleResultActions: bindActionCreators(toggleResultActions, dispatch)
});
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SearchPageContainer);
