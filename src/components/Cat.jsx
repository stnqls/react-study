import React from "react";

export default function Cat(props) {
  const mouse = props.mouse;
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
