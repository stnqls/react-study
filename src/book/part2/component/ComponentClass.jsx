//Component에서는 setState가 실행되면 state,props의 변경 여부를 신경 쓰지 않고 무조건적으로 컴포넌트를 업데이트 시킨다.

import React, { Component } from "react";

class ComponentClass extends Component {
  constructor(props) {
    super(props);
    this.state = {
      StateString: "react",
      StateArrayObj: ["react,", { react: "200" }],
    };
  }
  buttonClick = (type) => {
    if (type === "String") {
      this.setState({ StateString: "react" });
    } else {
      this.setState({ StateArrayObj: ["react", { react: "200" }] });
    }
  };
  render() {
    console.log("render() 실행");
    return (
      <div>
        <h2>ComponentClass</h2>
        <button onClick={(e) => this.buttonClick("String")}>문자열 변경</button>
        <button onClick={(e) => this.buttonClick("ArrayObject")}>
          객체 배열 변경
        </button>
      </div>
    );
  }
}

export default ComponentClass;

//setState()함수로 실행한 값은 이전에 있던 state 변수값과 동일하더라도, Component에서는 새로운 state변수가 같은 이름으로 생성됐다고 인식한다.
