import React from "react";
import { Link } from "react-router-dom";

class Header extends React.Component {
  constructor(props) {
    super();
    this.state = {
      header: "header",
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
    return (
      <div className={this.state.header}>
        <Link className="logo" to="/">
          Logo
        </Link>
        <ul className="row-flex-center  ">
          <li>
            <Link className="item" to="/cart">
              <div>Cart</div>
              <div className="col-flex">
                <div
                  style={{
                    flex: 1,
                    borderRadius: "30px",
                    width: "20px",
                    border: "1px solid white",
                    textAlign: "center",
                  }}
                >
                  1
                </div>
                <div style={{ flex: 1, color: "transparent" }}>2</div>
              </div>
            </Link>
          </li>
          <li>
            <Link className="item" to="/">
              Profile
            </Link>
          </li>
        </ul>
      </div>
    );
  }
}

export default Header;
