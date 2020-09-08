import React from "react";
import "font-awesome/css/font-awesome.min.css";
import "../../assets/css/product.css";
import { Link } from "react-router-dom";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Product from "./Product";

class ProductDetail extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      productList: [1, 2, 3, 4, 5, 6, 7, 8],
    };
  }

  render() {
    let { productList } = this.state;
    const settings = {
      infinite: true,
      speed: 800,
      slidesToShow: 6,
      slidesToScroll: 4,
      className: "slider",
    };
    return (
      <div className="container">
        <div className="card1">
          <div className="image">
            <div className="slider">
              <img src="./img/blue.png" alt="product" />
            </div>
            <div className="img-slider">
              <img src="./img/blue.png" alt="product" />
              <img src="./img/blue.png" alt="product" />
              <img src="./img/blue.png" alt="product" />
            </div>
          </div>
          <div className="infor">
            <h1>Captain Ameria Mouse</h1>
            <div className="review">
              <i>s</i>
              <i>s</i>
              <i>s</i>
            </div>
            <div className="price">
              <div>
                <h1>$2100</h1>
              </div>

              <div>
                <h3>$2350</h3>
              </div>
            </div>

            <div>
              <h5>DESCRIPTION</h5>
            </div>

            <div className="info-content">
              <p>
                ncourage people to post such bad question again and again. New
                people need to understand how to correctly write question
                because they need to understand that the question will be useful
                for new comer. We are not in a discussion forum. We all can
                check the link to see the code and put an answer to get
                reputation but this is not the purpose of t
              </p>
            </div>

            <div style={{ display: "flex" }}>
              <h5>SHOP:</h5>
              <span> Toy Store</span>
              <Link
                style={{
                  color: "blue",
                  textDecoration: "underline",
                  marginLeft: "5px",
                }}
                to="/home"
              >
                Visit
              </Link>
              <div
                style={{
                  color: "blue",
                  textDecoration: "underline",
                  marginLeft: "5px",
                }}
                to="/home"
              >
                Change shop
              </div>
            </div>
            <div style={{ display: "flex" }}>
              <h5>DELIVERY ADDRESS:</h5>
              <span> 545 Le Duc Tho, p115, Go Vap, TPHCM</span>
              <div
                style={{
                  color: "blue",
                  textDecoration: "underline",
                  marginLeft: "5px",
                }}
                to="/home"
              >
                Change
              </div>
            </div>
            <div>
              <h5>RELATED PROMOTIONS:</h5>
              <p>
                Enter <span>SHOP50</span> to get a promotion of 50000 VND to
                your order
              </p>
              <p>
                Enter <span>SHOP50</span> to get a promotion of 50000 VND to
                your order
              </p>
              <p>
                Enter <span>SHOP50</span> to get a promotion of 50000 VND to
                your order
              </p>
            </div>

            <div className="button">
              <div
                style={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <div
                  style={{
                    backgroundColor: "white",
                    height: "37px",
                    width: "37px",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    border: "1px solid #ccc",
                  }}
                >
                  <i className="fa fa-plus"></i>
                </div>
                <input
                  style={{
                    width: "50px",
                    height: "37px",
                    textAlign: "center",
                  }}
                />

                <div
                  style={{
                    backgroundColor: "white",
                    height: "37px",
                    width: "37px",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    border: "1px solid #ccc",
                  }}
                >
                  <i className="fa fa-minus"></i>
                </div>
              </div>
              <div className="cart-btn">
                <i className="fa fa-shopping-cart"></i> ADD TO CART
              </div>
            </div>
          </div>
        </div>
        <div style={{ width: "100%", height: "100%", marginTop: "50px" }}>
          <h3 style={{ marginLeft: "150px" }}>
            PRODUCTS RELATED TO THIS MOVIE
          </h3>
          <div className="sliderwrapper">
            <Slider
              style={{
                width: "85%",
              }}
              {...settings}
            >
              {productList.map(() => {
                return <Product />;
              })}
            </Slider>
          </div>
        </div>
        <div style={{ width: "100%", height: "100%", marginTop: "50px" }}>
          <h3 style={{ marginLeft: "150px" }}>
            SIMILAR PRODUCTS INSPIRED BY THIS ITEM
          </h3>
          <div className="sliderwrapper">
            <Slider
              style={{
                width: "85%",
              }}
              {...settings}
            >
              {productList.map(() => {
                return <Product />;
              })}
            </Slider>
          </div>
        </div>
      </div>
    );
  }
}

export default ProductDetail;
