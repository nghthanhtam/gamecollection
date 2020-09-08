import React from "react";
import "../../assets/css/product.css";

class Product extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    let { name, description, filePath, price } = this.props;
    return (
      <div className="product-card">
        <h1>Original Shoes</h1>
        <p>Saved: $4</p>
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
