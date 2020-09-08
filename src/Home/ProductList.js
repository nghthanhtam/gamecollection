import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import ".././assets/css/product.css";
import Product from "./Product/Product";

class ProductList extends React.Component {
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
        6,
        7,
        8,
      ],
      productList: [1, 2, 3, 4, 5, 6, 7, 8],
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
    let { productList, categoryList } = this.state;
    const settings = {
      infinite: true,
      speed: 800,
      slidesToShow: 6,
      slidesToScroll: 4,
      className: "slider",
    };
    return (
      <div>
        {/* <div className="header1">
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
        </div> */}

        <div
          style={{
            display: "flex",
            justifyContent: "center",
            padding: "10px",
          }}
        >
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              padding: "0 10px 10px 10px",
            }}
          >
            <div class="ui action input">
              <input type="text" placeholder="Search..." />
              <button class="ui icon button">
                <i class="search icon"></i>
              </button>
            </div>
            <h2 style={{ margin: "20px 0 -10px 0" }}>Filter List</h2>
            <h4>Movie Types</h4>

            <div style={{ marginBottom: "5px" }} className="ui checkbox">
              <input type="checkbox" className="example" />
              <label>Make my profile visible</label>
            </div>
            <div style={{ marginBottom: "5px" }} className="ui checkbox">
              <input type="checkbox" className="example" />
              <label>Make my profile visible</label>
            </div>
            <div style={{ marginBottom: "5px" }} className="ui checkbox">
              <input type="checkbox" className="example" />
              <label>Make my profile visible</label>
            </div>

            <h4>Age Ranges</h4>
            <div className="ui checkbox">
              <input type="checkbox" className="example" />
              <label>2 to 4 years</label>
            </div>
            <div className="ui checkbox">
              <input type="checkbox" className="example" />
              <label>5 to 7 years</label>
            </div>
            <div className="ui checkbox">
              <input type="checkbox" className="example" />
              <label>8 to 13 years</label>
            </div>

            <h4>Price</h4>
            <p>Pick the price</p>
            <div
              style={{
                display: "flex",
                justifyContent: "flex-start",
                alignItems: "center",
              }}
            >
              <input
                style={{
                  borderRadius: "5px",
                  border: "1px solid #ccc",
                  padding: "12px",
                  width: "90px",
                  height: "10px",
                  boxSizing: "border-box",
                }}
                type="text"
                id="fname"
                name="firstname"
                placeholder="$ Min"
              />
              <div
                style={{
                  width: "5px",
                  borderTop: "2px solid #c8c8c8",
                  margin: "5px",
                }}
              ></div>
              <input
                style={{
                  borderRadius: "5px",
                  border: "1px solid #ccc",
                  padding: "12px",
                  width: "90px",
                  height: "10px",
                  boxSizing: "border-box",
                }}
                type="text"
                id="fname"
                name="firstname"
                placeholder="$ Max"
              />
            </div>

            <div
              style={{
                width: "60px",
                height: "30px",
                border: "1px solid #ccc",
                textDecoration: "none",
                borderRadius: "5px",
                cursor: "pointer",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              Go
            </div>

            <h4>Avalability</h4>
            <div className="ui checkbox">
              <input type="checkbox" className="example" />
              <label>Include Out of Stock</label>
            </div>
          </div>

          <div className="list-wrapper">
            <div className="grid">
              {productList.map(() => {
                return <Product />;
              })}
            </div>
          </div>
        </div>
        <div style={{ marginTop: "70px" }}>
          <h3 style={{ marginLeft: "132px" }}>
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
          <div style={{ marginTop: "40px" }}>
            <h3 style={{ marginLeft: "132px" }}>
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
      </div>
    );
  }
}

export default ProductList;
