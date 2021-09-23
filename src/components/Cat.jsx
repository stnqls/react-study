import React from "react";

class Cat extends React.Component {
  render() {
    const mouse = this.props.mouse;
    return (
      <div
        style={{
          position: "absolute",
          left: mouse.x,
          top: mouse.y,
          width: "50px",
          height: "50px",
          backgroundColor: "greenyellow",
        }}
      ></div>
    );
  }
}

export default Cat;
