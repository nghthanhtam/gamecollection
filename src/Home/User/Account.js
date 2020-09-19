import React from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "../../assets/css/user-profile.css";

import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import ProfileItem from "./ProfileItem";

class Account extends React.Component {
  constructor(props) {
    super();
    this.state = {
      productList: [1, 2, 3, 4, 5, 6, 7, 8],
      profileItemList: [
        { name: "Thông tin khách hàng" },
        { name: "Sản phẩm mua sau" },
      ],
      header: "header",
      picLink: "./img/blue.png",
      section: "section-blue",
      left: 0,
    };
    this.handleScroll = this.handleScroll.bind(this);
  }
  componentDidMount() {
    window.addEventListener("scroll", this.handleScroll);
  }

  componentWillUnmount() {
    window.removeEventListener("scroll", this.handleScroll);
  }
  handleScroll = () => {
    if (window.scrollY > 10) {
      this.setState({ header: "header1" });
    } else {
      this.setState({ header: "header" });
    }
    this.setState({
      left: (-window.scrollY * 0.5).toString() + "px",
    });
  };

  render() {
    let { profileItemList } = this.state;

    return (
      <div>
        <Header />

        <div
          style={{
            zIndex: 10,
            marginBottom: "300px",
            position: "relative",
            backgroundColor: "#f7f7f7",
          }}
        >
          <div className="nohome-section"></div>

          <div
            style={{
              display: "flex",
              justifyContent: "center",
              padding: "20px",
            }}
          >
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

            <div className="acc-container">
              <form
                style={{ fontFamily: "Poppins, sans-serif;", color: "#0d1136" }}
                className="ui form"
              >
                <div className="field">
                  <label style={{ fontWeight: "400", fontSize: "15px" }}>
                    Họ tên
                  </label>
                  <input type="text" name="last-name" placeholder="name" />
                </div>
                <div className="field">
                  <label style={{ fontWeight: "400", fontSize: "15px" }}>
                    Số điện thoại
                  </label>
                  <input type="text" name="last-name" placeholder="telephone" />
                </div>
                <div className="field">
                  <label style={{ fontWeight: "400", fontSize: "15px" }}>
                    Email
                  </label>
                  <input type="text" name="last-name" placeholder="telephone" />
                </div>
                <div className="field">
                  <label style={{ fontWeight: "400", fontSize: "15px" }}>
                    Giới tính
                  </label>
                  <div>
                    <select className="ui dropdown">
                      <option value="1">Nam</option>
                      <option value="0">Nứ</option>
                    </select>
                  </div>
                </div>

                <button
                  style={{ backgroundColor: "#3571a7", color: "white" }}
                  className="ui button"
                  type="submit"
                >
                  Cập nhật
                </button>
              </form>
            </div>
          </div>
        </div>

        <Footer />
      </div>
    );
  }
}

export default Account;
