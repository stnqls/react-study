import React from "react";

export default function Cat(props) {
  const move = props.move;
  return (
    <div
      style={{
        position: "sticky",
        left: move.x - 25,
        top: move.y - 25,
        width: "50px",
        height: "50px",
        borderRadius: "50%",
        backgroundColor: "greenyellow",
      }}
    ></div>
  );
}
