import React from "react";
import "../../assets/css/user-profile.css";
import history from "../history";

class ProfileItem extends React.Component {
  constructor(props) {
    super();
  }

  onProfileitemClick = () => {};

  render() {
    let { item } = this.props;

    return (
      <div onClick={() => history.push(item.link)} className="pro-item">
        <div>{item.name}</div>
        <i className="fa fa-angle-right"></i>
      </div>
    );
  }
}

export default ProfileItem;
