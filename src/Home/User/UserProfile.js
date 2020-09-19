import React from "react";

import "../../assets/css/user-profile.css";

import ProfileItem from "./ProfileItem";

class UserProfile extends React.Component {
  constructor(props) {
    super();
    this.state = {
      profileItemList: [
        { name: "Thông tin khách hàng", link: "/user/account" },
        { name: "Sản phẩm mua sau", link: "/user/later-list" },
      ],
    };
  }

  render() {
    let { profileItemList } = this.state;

    return (
      <div className="pro-list">
        {profileItemList.map((item) => {
          return <ProfileItem item={item} />;
        })}

        <div className="pro-item">
          <div>Quản lý đơn hàng</div>
          <i className="fa fa-angle-right"></i>
        </div>
        <div className="pro-item">
          <div>Sổ địa chỉ</div>
          <i className="fa fa-angle-right"></i>
        </div>
        <div className="pro-item">
          <div>Thông tin thanh toán</div>
          <i className="fa fa-angle-right"></i>
        </div>
        <div className="pro-item">
          <div>Nhận xét đã viết</div>
          <i className="fa fa-angle-right"></i>
        </div>
        <div className="pro-item">
          <div>Sản phẩm đã xem qua</div>
          <i className="fa fa-angle-right"></i>
        </div>
        <div className="pro-item">
          <div>Sản phẩm mua sau</div>
          <i className="fa fa-angle-right"></i>
        </div>
      </div>
    );
  }
}

export default UserProfile;
