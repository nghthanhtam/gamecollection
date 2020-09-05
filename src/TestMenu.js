import React from "react";
import "./assets/css/bgstyle.css";
import { Link } from "react-router-dom";

class TestMenu extends React.Component {
  constructor(props) {
    super(props);
    this.state = { bg: "bg" };
    this.handleScroll = this.handleScroll.bind(this);
  }
  componentDidMount() {
    window.addEventListener("scroll", this.handleScroll);
  }

  componentWillUnmount() {
    window.removeEventListener("scroll", this.handleScroll);
  }
  handleScroll = () => {
    if (window.scrollY > 500) {
      this.setState({ bg: "bg1" });
    } else {
      this.setState({ bg: "bg" });
    }
  };

  render() {
    return (
      <div className="menu">
        <div className={this.state.bg}>
          <Link className="logo" to="/">
            Home
          </Link>
          <ul>
            <li>
              <Link className="item" to="/">
                Profile
              </Link>
            </li>
            <li>
              <Link className="item" to="/">
                My List
              </Link>
            </li>
          </ul>
        </div>
        <div className="banner"></div>
      </div>
    );
  }
}

export default TestMenu;
