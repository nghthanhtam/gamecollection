import React from "react";
import "../../assets/css/product.css";
import { Link } from "react-router-dom";

class Product extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div className="product-card">
        <h1>Original Shoes</h1>
        <p>Lorem isperedkfjalskd dklfjd dfjs as</p>
        <img className="product-pic" src="./img/blue.png" alt="product" />
        <div className="product-info">
          <div className="product-price">90$</div>
          <div className="product-btn">Add to cart</div>
        </div>
      </div>
    );
  }
}

export default Product;
