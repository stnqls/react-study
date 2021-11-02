import React, { Component } from "react";

class Es6 extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  componentDidMount() {
    var jsString1 = "자바스크립트";
    var jsString2 = "입니다\n다음줄 입니다.";
    console.log(jsString1 + "문자열" + jsString2 + "~");

    var Es6String1 = "ES6";
    var Es6String2 = "입니다.";
    console.log(`${Es6String1}문자열 ${Es6String2}!! 
  ____다음 줄입니다.`);

    var LongStirng = "ES6에 추가된 String함수들입니다.";
    console.log("startsWith : " + LongStirng.startsWith("ES6에 추가"));
    console.log("endWith : " + LongStirng.endsWith("함수들입니다."));
    console.log("includes: " + LongStirng.includes("추가된 String"));
  }

  render() {
    return <h2>[This is ES6 string]</h2>;
  }
}

export default Es6;
