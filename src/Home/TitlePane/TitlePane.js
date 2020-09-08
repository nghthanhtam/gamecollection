import React from "react";
import "../../assets/css/title-pane.css";
import { Link } from "react-router-dom";

class TitlePane extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    let { title } = this.props;
    return (
      <div className="outer-wrapper">
        <div className="pane-wrapper">
          <div className="line"></div>
          <div className="title">
            <h3>{title}</h3>
          </div>
          <div className="line"></div>
        </div>
        <Link to="product-list" className="text">
          Shop Now
        </Link>
      </div>
    );
  }
}

export default TitlePane;
