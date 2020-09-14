import React from "react";
import "font-awesome/css/font-awesome.min.css";
import "../../assets/css/cart.css";

class Cart extends React.Component {
  constructor(props) {
    super();
    this.state = {};
  }

  render() {
    return (
      <div className="ui checkbox">
        <input type="checkbox" className="example" />
        <label className="label-chkbox">Nguyễn Huỳnh Thanh Tâm</label>
        <div className="address-box">
          <div className="add">
            <p className="add1">Địa chỉ:</p>
            <p>679 Lê Đức Thọ, P15, Gò Vấp , TPHCM</p>
          </div>
          <div className="row-flex">
            <p className="tel1">Điện thoại:</p>
            <p>0778895138</p>
          </div>
        </div>
      </div>
    );
  }
}

export default Cart;
