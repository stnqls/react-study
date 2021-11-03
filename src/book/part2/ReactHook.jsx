import React, { useState, useEffect } from "react";

function ReactHook() {
  const [contents, setContents] = useState("[This is react]");

  useEffect(() => {
    console.log("useEffect");
  });

  return (
    <div>
      <h2>{contents}</h2>
      <button onClick={() => setContents("[This is hook]")}>버튼</button>
    </div>
  );
}

export default ReactHook;
