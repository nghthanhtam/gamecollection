import React from "react";
import { Link } from "react-router-dom";
import "../assets/css/home.css";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import Category from "./Category/Category";
import TitlePane from "./TitlePane/TitlePane";
import Product from "./Product/Product";

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
        5,
      ],
      productList: [1, 2, 3, 4, 5, 6],
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
    let { categoryList, productList } = this.state;
    const settings = {
      dots: true,
      infinite: true,
      speed: 1000,
      slidesToShow: 1,
      slidesToScroll: 1,

      className: "slides",
    };
    const settingsCate = {
      infinite: true,
      speed: 1000,
      slidesToShow: 4,
      slidesToScroll: 1,
      autoplay: true,
      autoplaySpeed: 1800,
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
                    type specimen book. It has survived not only five centuries,
                    but also the leap into electronic typesetting, remaining
                    essentially unchanged. It was popularised in the 1960s with
                    the release of Letraset sheets containing Lorem Ipsum is
                    simply dummy text of the printing and typesetting industry.
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
                    type specimen book. It has survived not only five centuries,
                    but also the leap into electronic typesetting, remaining
                    essentially unchanged. It was popularised in the 1960s with
                    the release of Letraset sheets containing Lorem Ipsum is
                    simply dummy text of the printing and typesetting industry.
                    Lorem Ipsum has been the industry's standard dummy text ever
                    since the 1500s, when an unknown printer
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

        <TitlePane title="BROWSE YOUR CATEGORY" />

        <div className="sliderwrapper">
          <Slider className="catewrapper" {...settingsCate}>
            {categoryList.map((cate) => {
              return <Category cate={cate} />;
            })}
          </Slider>
        </div>

        <div className="list-wrapper">
          <div className="grid">
            {productList.map(() => {
              return <Product />;
            })}
          </div>
        </div>
      </div>
    );
  }
}

export default Home;
