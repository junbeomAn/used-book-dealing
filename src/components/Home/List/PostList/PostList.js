import React from "react";

import styles from "./PostList.scss";
import classNames from "classnames/bind";
import { Link } from "react-router-dom";
const cx = classNames.bind(styles);
const url = 'http://192.168.64.145';
const port = 3001;

// const listCount = [1,2,3,4,5,6,7,8,9,10,11,12];
const exampleData = [{
  bookName: '노드제이에스 마스터',
  location: '부산 진구',
  price: '25000원',
  photoUrl: "http://image.yes24.com/blogimage/blog/w/g/wgdw9931/14572813_1748285228755804_947023256571635128_n.jpg",
}, {
  bookName: 'You don\'t know JS',
  location: '부산 사상구',
  price: '22000원',
  photoUrl: "http://image.yes24.com/momo/TopCate1305/MidCate005/130441212.jpg"
}
]
const PostItem = ({ item }) => {
  return(
  <div className={cx("post-item", "product-info")} >
    <img
      className={cx("product-info")}
      src={`${url}:${port}/${item.photoUrl}`}
      alt="item"
    />
    <span className={cx("product-info")}>{item.bookName}</span>
    <hr className={cx("product-info")} />
    {/*<span className={cx("product-info")}>{item.location}</span>*/}
    <span className={cx("product-info")}>{item.price}</span>
  </div>
  )
};

const PostList = ({ data = exampleData }) => (
  <div className={cx("post-list")}>
    {data.map((item, index) => (
      <Link to={`/post/${item.id || 1}`} key={index}>
        <PostItem key={index} item={item} />
      </Link>
    ))}
  </div>
);

export default PostList;
