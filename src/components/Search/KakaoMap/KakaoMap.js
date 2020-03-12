import React from "react";

import styles from "./KakaoMap.scss";
import classNames from "classnames/bind";

const cx = classNames.bind(styles);

const KakaoMap = ({ searchResult }) => {

  // searchResult로 위에 fake data 대신 address 등 넣어줘야함....
  return (
    <div id="Kakao-map" className={cx("Kakao-map")}>
    </div>
  );
};

export default KakaoMap;
