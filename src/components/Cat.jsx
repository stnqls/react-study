import React from "react";

export default function Cat(props) {
  const mouse = props.mouse;
  return (
    <div
      style={{
        position: "sticky",
        left: mouse.x - 25,
        top: mouse.y - 25,
        width: "50px",
        height: "50px",
        borderRadius: "50%",
        backgroundColor: "greenyellow",
      }}
    ></div>
  );
}
