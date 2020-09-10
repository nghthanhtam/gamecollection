import React from "react";
import { Link } from "react-router-dom";
import "../assets/css/home.css";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import Category from "./Category/Category";
import TitlePane from "./TitlePane/TitlePane";
import Product from "./Product/Product";
import Keyword from "./Product/Keyword";
import Banner from "../assets/dominator.png";

class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      categoryList: [
        {
          name: "Electronics",
          description: "Mouses, keyboards",
          picLink: "./img/elec.png",
        },
        {
          name: "Books",
          description: "Novels, Comics",
          picLink: "./img/book.png",
        },
        {
          name: "Clothes",
          description: "Hats, Shoes, Jackets",
          picLink: "./img/clothes.png",
        },
        {
          name: "Toys",
          description: "Guns, Swords, Figures",
          picLink: "./img/toy.png",
        },
        {
          name: "Video Games",
          description: "Games",
          picLink: "./img/game.png",
        },
        {
          name: "Stuff",
          description: "Others",
          picLink: "./img/stuff.png",
        },
        {
          name: "Stuff",
          description: "Others",
          picLink: "./img/stuff.png",
        },
      ],
      productList: [1, 2, 3, 4, 5, 6, 7, 8],
      keywords: [
        { color: "kw-blue" },
        { color: "kw-violet" },
        { color: "kw-red" },
        { color: "kw-green" },
        { color: "kw-blue" },
        { color: "kw-violet" },
        { color: "kw-red" },
        { color: "kw-green" },
      ],
      header: "header",
      picLink: "./img/blue.png",
      section: "section-blue",
      left: 0,
    };
    this.handleScroll = this.handleScroll.bind(this);
    this.changePic = this.changePic.bind(this);
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

  changePic = (e) => {
    console.log(e.target.alt);
    if (e.target.alt === "blue") {
      this.setState({ picLink: "./img/blue.png" });
      this.setState({ section: "section-blue" });
    } else if (e.target.alt === "red") {
      this.setState({ picLink: "./img/red.png" });
      this.setState({ section: "section-red" });
    } else {
      this.setState({ picLink: "./img/black.png" });
      this.setState({ section: "section-black" });
    }
  };

  render() {
    let { categoryList, productList, keywords } = this.state;
    const settings = {
      dots: true,
      infinite: true,
      speed: 1000,
      slidesToShow: 1,
      slidesToScroll: 1,
      className: "slides",
    };
    const settingsKW = {
      infinite: true,
      speed: 1000,
      slidesToShow: 7,
      slidesToScroll: 4,
      className: "slider",
    };
    const settingsHis = {
      infinite: true,
      speed: 1000,
      slidesToShow: 5,
      slidesToScroll: 3,
      className: "slider",
    };
    return (
      <div>
        <div className={this.state.header}>
          <Link className="logo" to="/">
            Logo
          </Link>
          <ul>
            <li>
              <Link className="item" to="/">
                Cart
              </Link>
            </li>
            <li>
              <Link className="item" to="/">
                Profile
              </Link>
            </li>
          </ul>
        </div>
        <div
          style={{
            zIndex: 10,
            marginBottom: "400px",
            position: "relative",
            backgroundColor: "#fff",
          }}
        >
          <Slider {...settings}>
            <div>
              <div className={this.state.section}>
                <div className="content">
                  <div className="textBox">
                    <h2>
                      why not <br />
                      <span>Shop Now</span>{" "}
                    </h2>
                    <p>
                      Lorem Ipsum is simply dummy text of the printing and
                      typesetting industry. Lorem Ipsum has been the industry's
                      standard dummy text ever since the 1500s, when an unknown
                      printer took a galley of type and scrambled it to make a
                      type specimen book. It has survived not only five
                      centuries, but also the leap into electronic typesetting,
                      remaining essentially unchanged. It was popularised in the
                      1960s with the release of Letraset sheets containing Lorem
                      Ipsum is simply dummy text of the printing and typesetting
                      industry.
                    </p>
                    <Link className="item" to="/">
                      View all products
                    </Link>
                  </div>
                  <div className="imgBox">
                    <img src={this.state.picLink} alt="blue" />
                  </div>
                </div>

                <ul className="thumb">
                  <li>
                    <img
                      className="pepsi"
                      src="./img/blue.png"
                      alt="blue"
                      onClick={this.changePic}
                    />
                  </li>
                  <li>
                    <img
                      className="red"
                      src="./img/red.png"
                      alt="red"
                      onClick={this.changePic}
                    />
                  </li>
                  <li>
                    <img
                      className="pepsi"
                      src="./img/black.png"
                      alt="black"
                      onClick={this.changePic}
                    />
                  </li>
                </ul>
              </div>
            </div>
            <div>
              <div className="section-red">
                <div className={this.state.header}>
                  <Link className="logo" to="/">
                    Logo
                  </Link>
                  <ul>
                    <li>
                      <Link className="item" to="/">
                        Cart
                      </Link>
                    </li>
                    <li>
                      <Link className="item" to="/">
                        Profile
                      </Link>
                    </li>
                  </ul>
                </div>

                <div className="content">
                  <div className="textBox">
                    <h2>
                      why not <br />
                      <span>Shop Now</span>{" "}
                    </h2>
                    <p>
                      Lorem Ipsum is simply dummy text of the printing and
                      typesetting industry. Lorem Ipsum has been the industry's
                      standard dummy text ever since the 1500s, when an unknown
                      printer took a galley of type and scrambled it to make a
                      type specimen book. It has survived not only five
                      centuries, but also the leap into electronic typesetting,
                      remaining essentially unchanged. It was popularised in the
                      1960s with the release of Letraset sheets containing Lorem
                      Ipsum is simply dummy text of the printing and typesetting
                      industry. Lorem Ipsum has been the industry's standard
                      dummy text ever since the 1500s, when an unknown printer
                    </p>
                    <Link className="item" to="/">
                      View all products
                    </Link>
                  </div>
                  <div className="imgBox">
                    <img src={this.state.picLink} alt="blue" />
                  </div>
                </div>

                <ul className="thumb">
                  <li>
                    <img
                      className="pepsi"
                      src="./img/blue.png"
                      alt="blue"
                      onClick={this.changePic}
                    />
                  </li>
                  <li>
                    <img
                      className="red"
                      src="./img/red.png"
                      alt="red"
                      onClick={this.changePic}
                    />
                  </li>
                  <li>
                    <img
                      className="pepsi"
                      src="./img/black.png"
                      alt="black"
                      onClick={this.changePic}
                    />
                  </li>
                </ul>
              </div>
            </div>
          </Slider>

          <TitlePane title="BROWSE YOUR CATEGORY" isNotShop={true} />
          <div className="list-wrapper">
            <div className="cate-grid">
              {categoryList.map((cate) => {
                return <Category cate={cate} />;
              })}
            </div>
          </div>

          <TitlePane title="Best Sellers in Septemper" />
          <div className="list-wrapper">
            <div className="grid">
              {productList.map(() => {
                return <Product />;
              })}
            </div>
          </div>

          <TitlePane title="Top Adventure Movie Products" />
          <div className="list-wrapper">
            <div className="grid">
              {productList.map(() => {
                return <Product />;
              })}
            </div>
          </div>

          <div className="container-kw">
            <div className="title-kw">HOT KEYWORDS</div>
            <div className="sliderwrapper">
              <Slider
                style={{
                  width: "84%",
                }}
                {...settingsKW}
              >
                {keywords.map((item) => {
                  return <Keyword item={item} />;
                })}
              </Slider>
            </div>
          </div>

          <div className="container-for-you">
            <div className="title-for-you">ONLY FOR YOU</div>
            <div className="list-wrapper">
              <div className="grid">
                {productList.map(() => {
                  return <Product />;
                })}
              </div>
            </div>
          </div>

          <div className="container-his">
            <div className="title-his">YOUR BROWSING HISTORY</div>
            <div className="sliderwrapper">
              <Slider
                style={{
                  width: "83.5%",
                }}
                {...settingsHis}
              >
                {productList.map(() => {
                  return <Product />;
                })}
              </Slider>
            </div>
          </div>

          <div className="banner-wrapper">
            <img
              style={{ width: "900px", zIndex: 1, marginRight: "-100px" }}
              alt="banner"
              src="./img/banner.png"
            />

            <div className="banner-form">
              <div className="text-wrapper">
                <div className="text-stay">STAY</div>
                <div className="text-wus">WITH US</div>
              </div>
              <div className="cart-btn">
                <i className="fa fa-shopping-cart"></i> SIGN IN
              </div>
              OR
              <div className="cart-btn">
                <i className="fa fa-handshake-o"></i>BE OUR PARTNER
              </div>
            </div>
          </div>

          <TitlePane title="Top Adventure Movie Products" />
          <div className="list-wrapper">
            <div className="grid">
              {productList.map(() => {
                return <Product />;
              })}
            </div>
          </div>
        </div>

        <footer className="fixed-footer">
          <div className="shopnow">
            <div className="shop">SHOP</div>
            <div className="now">NOW</div>
          </div>
          <div className="description">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
          </div>
          <div className="social">
            <div>
              <i className="fa fa-facebook"></i>
            </div>
            <div>
              <i className="fa fa-instagram"></i>
            </div>
            <div>
              <i className="fa fa-twitter"></i>
            </div>
          </div>
          <div className="footer-cate">
            <div>Trending</div>
            <div>Best Seller</div>
            <div>All Products</div>
            <div>Wishlist</div>
          </div>
        </footer>
      </div>
    );
  }
}

export default Home;
