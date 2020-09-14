import React from "react";
import Button from "@material-ui/core/Button";
import { Link } from "react-router-dom";

import "font-awesome/css/font-awesome.min.css";
import "../../assets/css/cart.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import AddressDetail from "../Checkout/AddressDetail";

class Cart extends React.Component {
  constructor(props) {
    super();
    this.state = { addList: [1, 2, 3] };
  }
  checkout = () => {};

  render() {
    let { addList } = this.state;
    return (
      <div>
        <Header />

        <div
          style={{
            zIndex: 10,
            marginBottom: "300px",
            position: "relative",
            backgroundColor: "#fff",
          }}
        >
          <div className="nohome-section"></div>
          <div className="cart-container">
            <div className="cart-card">
              <div className="address-container">
                <h3>Địa chỉ giao hàng</h3>
                {addList.map(() => {
                  return <AddressDetail />;
                })}

                <div className="row-flex">
                  <Button
                    style={{
                      color: "white",
                      backgroundColor: "#3571a7",
                      margin: "10px 10px 0 0",
                    }}
                  >
                    Thêm địa chỉ
                  </Button>
                  <Button
                    style={{
                      color: "black",
                      backgroundColor: "#fff",
                      marginTop: "10px",
                      border: "1px solid #ccc",
                    }}
                  >
                    Sửa
                  </Button>
                </div>
                <h3>Chọn hình thức thanh toán</h3>

                <div style={{ marginBottom: "10px" }} className="ui checkbox">
                  <input type="checkbox" className="example" />
                  <label>Thanh toán bằng tiền mặt</label>
                </div>
                <div style={{ marginBottom: "10px" }} className="ui checkbox">
                  <input type="checkbox" className="example" />
                  <label>Thanh toán bằng thẻ visa</label>
                </div>
              </div>
              <div className="center-col-flex">
                <p
                  style={{
                    borderBottom: "1px solid #ccc",
                    paddingBottom: "20px",
                    marginBottom: "-2px",
                  }}
                >
                  Đơn hàng (7 sản phẩm)
                </p>
                <div className="pm-order">
                  <div className="pm-orderdet">
                    <h5>2x</h5>
                    <Link to="/product-detail">
                      Moojt noi com dien ap chao thiet la dep la dep la dep la
                      dep
                    </Link>
                  </div>
                  <div>2000000đ</div>
                </div>
                <div className="pm-order">
                  <div className="pm-orderdet">
                    <h5>2x</h5>
                    <Link to="/product-detail">
                      Moojt noi com dien ap chao thiet la dep la dep la dep la
                      dep
                    </Link>
                  </div>
                  <div>2000000đ</div>
                </div>
                <div className="checkout">
                  <p> Thành tiền</p>
                  <p className="total"> 200000đ</p>
                </div>
                <Button
                  style={{
                    color: "white",
                    backgroundColor: "#3571a7",
                    width: "108%",
                    marginTop: "20px",
                  }}
                  onClick={() => this.checkout()}
                >
                  Đặt mua
                </Button>
              </div>
            </div>
          </div>
        </div>

        <Footer />
      </div>
    );
  }
}

export default Cart;
