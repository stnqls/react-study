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
        height: "600px",
        width: "600px",
        backgroundColor: "lightblue",
      }}
      onMouseMove={handleMouseMove}
    >
      {props.render(move)}
    </div>
  );
}
