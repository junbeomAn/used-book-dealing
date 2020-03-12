import React, {Fragment} from "react";

import styles from "./PostItemBody.scss";
import PostItemImage from "components/PostItem/PostItemImage";
import classNames from "classnames/bind";
// import { postItem } from "../../../store/modules/postItem";

const cx = classNames.bind(styles);

const getDataFromTags = (pathname) => {
  const bookName = document.getElementById("post-item-title").value || "";
  const price = document.getElementById("post-item-price").value || "";
  const publisher = document.getElementById("post-item-publisher").value || "";
  const author = document.getElementById("post-item-author").value || "";
  const address = !pathname.includes('update') && (document.getElementById("post-item-location").value || "");
  // const state = document.getElementById("post-item-state").value || "";
  const content = document.getElementById("post-item-content").value || "";
  const id = localStorage.getItem('Product_id') || 1;
  const User_id = localStorage.getItem('User_id');
  //User_id 추가해야함
  return {
    bookName,
    price,
    publisher,
    author,
    address,
    // state,
    content,
    User_id,
    id,
    categoryCode: 1,
  };
};

const PostItemBody = ({
  postItem,
  history,
  handleImageUpload,
  photoUrl,
  productData,
  editing,
  handlePostUpdate
}) => (
  <div className={cx("post-item-body")}>
    <span className={cx("post-item-body-selling")}>판매 하기{editing && '(수정)'}</span>
    <label htmlFor="post-item-title">책 이름</label>
    <input
      type="text"
      name="post-item-title"
      id="post-item-title"
      className={cx("post-item-title")}
      defaultValue={productData.bookName}
      placeholder='책 제목'
      required
    />
    <hr />
    {!editing &&
    <Fragment>
      <span>이미지</span>
      <div className={cx("post-item-image-wrapper")}>
        <PostItemImage />
        {/*<div className={cx("blank")}>+</div>*/}
        <input
          type="file"
          id="input-file"
          className={cx("input-file")}
          name="myfile"
          accept=".jpg, .png"
          required
          onChange={e => handleImageUpload(e)}
        />
      </div>
      <hr />
    </Fragment> 
     }    
    
    <span>가격</span>
    <input
      type="text"
      id="post-item-price"
      required
      placeholder="판매가격 입력"
      defaultValue={productData.price}
    />
    <hr />
    <span>출판사</span>
    <input
      type="text"
      id="post-item-publisher"
      required
      placeholder="도서 출판사 입력"
      defaultValue={productData.publisher}
    />
    <hr />
    <span>저자</span>
    <input
      type="text"
      id="post-item-author"
      required
      placeholder="도서 저자 입력"
      defaultValue={productData.author}
    />
    <hr />
    {/*<span>상태</span>
    <input
      type="text"
      id="post-item-state"
      required
      placeholder="상품의 상태(미개봉, 중고 등)"
    />
    <hr />*/}
    {!editing &&
    <Fragment>
      <span>판매 주소</span>
      <input
        type="text"
        id="post-item-location"
        required
        placeholder="판매 주소입력 예시) '부산 사상구 주례로 79'"
      />
      <hr />
    </Fragment>
    }
    <span>내용</span>
    <textarea
      className={cx("post-item-content")}
      required
      name="post-item-content"
      id="post-item-content"
      defaultValue={productData.content}
    />
    <button
      type="button"
      className={cx("btn", "btn-default", 'post-item-body-button')}
      onClick={() => {
        const pathname = window.location.pathname;
        const data = getDataFromTags(pathname);
        // 여기서 data 객체에 image 정보를 담는다.
        // Object.assign(data, {photoUrl: photoUrl})
        editing ? handlePostUpdate(data) : postItem(data);
      }}
    >
      등록
    </button>
  </div>
);

export default PostItemBody;
