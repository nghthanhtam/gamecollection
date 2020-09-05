import React from "react";
import "./assets/css/bgstyle.css";
import TestMenu from "./TestMenu";
class GamesPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      l_moon: 0,
      t_moutain: 0,
      t_bg: 0,
      t_text: 0,
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
    this.setState({
      t_bg: (window.scrollY * 0.2).toString() + "px",
    });
    this.setState({
      l_moon: (-window.scrollY * 0.5).toString() + "px",
    });
    // this.setState({
    //   t_moutain: (-window.scrollY * 0.15).toString() + "px",
    // });
    // this.setState({
    //   t_road: (window.scrollY * 0.5).toString() + "px",
    // });
    this.setState({
      t_text: (window.scrollY * 0.75).toString() + "px",
    });
  };

  render() {
    return (
      <div style={body}>
        <div style={section}>
          <img
            style={{
              position: "absolute",
              top: this.state.t_bg,
              left: 0,
              width: "100%",
              height: "100%",
              objectFit: "cover",
              pointerEvents: "none",
            }}
            src={require("./assets/bg.jpg")}
            alt="bg"
          />
          <img
            style={{
              position: "absolute",
              top: 0,
              left: this.state.l_moon,
              width: "100%",
              height: "100%",
              objectFit: "cover",
              pointerEvents: "none",
            }}
            src={require("./assets/moon.png")}
            alt="moon"
          />
          <img
            style={{
              position: "absolute",
              top: this.state.t_moutain,
              left: 0,
              width: "100%",
              height: "100%",
              objectFit: "cover",
              pointerEvents: "none",
              zIndex: 2,
            }}
            src={require("./assets/mountain.png")}
            alt="mountain"
          />
          {/* <img
            style={{
              position: "absolute",
              top: this.state.t_moutain,
              left: 0,
              width: "100%",
              height: "100%",
              objectFit: "cover",
              pointerEvents: "none",
              zIndex: 2,
            }}
            src={require("./assets/road.png")}
            alt="road"
          /> */}
          <h1
            style={{
              position: "relative",
              color: "#fff",
              fontSize: "9em",
              zIndex: 1,
              top: this.state.t_text,
              marginTop: "120px",
            }}
          >
            Shop Now!
          </h1>
        </div>
        <h2>Parallox Styling</h2>
        <div style={{ width: "200px", fontSize: "30px" }}>
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
          scrambled it to make a type specimen book. It has survived not only
          five centuries, but also the leap into electronic typesetting,
          remaining essentially unchanged. It was popularised in the 1960s with
          the release of Letraset sheets containing Lorem Ipsum is simply dummy
          text of the printing and typesetting industry. Lorem Ipsum has been
          the industry's standard dummy text ever since the 1500s, when an
          unknown printer took a galley of type and scrambled it to make a type
          specimen book. It has survived not only five centuries, but also the
          leap into electronic typesetting, remaining essentially unchanged. It
          was popularised in the 1960s with the release of Letraset sheets
          containing
        </div>
      </div>
    );
  }
}
const img = {
  position: "absolute",
  top: 0,
  left: 0,
  width: "100%",
  height: "100%",
  objectFit: "cover",
  pointerEvents: "none",
};
const section = {
  position: "relative",
  width: "100%",
  height: "100vh",
  overflow: "hidden",
  display: "flex",
  justifyItems: "center",
  justifyContent: "center",
  // "&::before": {
  //   content: "",
  //   position: "absolute",
  //   bottom: 0,
  //   width: "100%",
  //   height: "100px",
  //   background: "linear-gradient(to top, #0a2a43, transparent)",
  // },
  // "&::after": {
  //   content: "",
  //   position: "absolute",
  //   top: 0,
  //   left: 0,
  //   width: "100%",
  //   height: "100%",
  //   background: "#0a2a43",
  //   zIndex: 10000,
  //   mixBlendMode: "color",
  // },
};
const body = {
  margin: 0,
  padding: 0,
  //backgroundColor: "#E1F2FF",
  minHeight: "50px",
  //width: "100%",
  justifyItems: "center",
  justifyContent: "center",
  // backgroundImage: `url(${bgImg})`,
};
const text = {
  position: "relative",
  color: "#fff",
  fontSize: "10em",
  zIndex: 1,
};
export default GamesPage;
