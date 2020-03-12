import React, { Component } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import axios from 'axios';



import * as baseActions from "store/modules/base";
import * as postItemActions from "store/modules/postItem";
import PostItemPage from "pages/PostItemPage";

class PostItemContainer extends Component {
  static defaultProps = {
    productData: {
      bookName:'',
      price: '',
      publisher: '',
      author: '',
      content: '',
    }
  }

  postNewItem = data => {
    const { postItemActions, history , photoUrl} = this.props;
    // Object.assign(data, { photoUrl: photoUrl });
    postItemActions
      .postItem(data)
      .then(res => {
        console.log(res);
        history.push("/");
      })
      .catch(err => console.log(err));
  };

  handlePostUpdate = (data) => {
    const { postItemActions, history } = this.props;
    // Object.assign(data, { photoUrl });
    postItemActions
      .updateItem(data)
      .then(res => {
        console.log(res);
        history.push("/");
      })
      .catch(err => {
        console.log(err);
      })
  }

  handleImageUpload = (event) => {
    const { postItemActions } = this.props;
    var input = document.getElementById("input-file");
    var fReader = new FileReader();
    fReader.readAsDataURL(input.files[0]);
    fReader.onloadend = function(e) {
      var img = document.getElementById("input-img");
      // console.log(e.target.result);
      img.src = e.target.result;
    };

    const formData = new FormData();
    formData.append(
      "myfile",
      event.target.files[0],
      event.target.files[0].name,
    );
    axios.post('http://192.168.64.145:3001/product/uploadPhoto', formData)
    .then(res => {
      if(res.result === 'no data') {
        alert('이미지 등록실패');
      }
    })
    .catch(err => console.log(err));

    // store에 저장 액션
    // console.log(formData);
    // console.log(postItemActions)
    // postItemActions.setPhotoData(formData); //store에 포토url 저장
    // console.log(formData.get("myfile"));
  };

  componentDidMount() {
    const { history, postItemActions, productData, editing } = this.props;
    const pathname = window.location.pathname;

    const isLoggedIn = localStorage.getItem('isLoggedIn');
    if ( !isLoggedIn || isLoggedIn === 'false' ) {
      alert('로그인이 필요한 페이지입니다.')
      history.push('/login'); 
    }
    // 뒤로가기 했다가 돌아왔을 때 editing state 다시 바꿔줌.
    (pathname.includes('update') && !editing) && postItemActions.changeEditing(productData)

  } 

  render() {
    const { postNewItem, handleImageUpload, handlePostUpdate } = this;
    const { history, photoData, editing = false, productData } = this.props;
    return (
      <div>        
        <PostItemPage
          history={history}
          postItem={postNewItem}
          handleImageUpload={handleImageUpload}
          photoUrl={photoData} //안쓸듯
          productData={productData}
          editing={editing}
          handlePostUpdate={handlePostUpdate}
        />        
      </div>
    );
  }
}

const mapStateToProps = ({ postItem, base }) => ({
  photoUrl: postItem.photoData,
  isLoggedIn: base.isLoggedIn,
  editing: postItem.editing,
  productData: postItem.productData,
});

const mapDispatchToProps = dispatch => ({
  postItemActions: bindActionCreators(postItemActions, dispatch),
  baseActions: bindActionCreators(baseActions, dispatch),
});
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(PostItemContainer);
