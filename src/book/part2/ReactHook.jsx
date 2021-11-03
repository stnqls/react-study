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

//userEffect()함수는 componentDidMount()와같이 return되는 html코드들이 화면에 그려진 이후에 실행된다.
//최초 페이지가 로딩될때 한번 실행되고 setContents()함수로 state값이 변경되면 한번더 실행된다.
