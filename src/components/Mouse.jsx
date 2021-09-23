import React, { useState } from "react";

export default function Mouse(props) {
  const [move, setMove] = useState(0);
  function handleMouseMove(e) {
    setMove({
      x: e.clientX,
      y: e.clientY,
    });
  }
  return (
    <div
      style={{
        height: "300px",
        width: "300px",
        backgroundColor: "lightblue",
        margin: "0 auto",
        position: "relative",
      }}
      onMouseMove={handleMouseMove}
    >
      {props.render(move)}
    </div>
  );
}
