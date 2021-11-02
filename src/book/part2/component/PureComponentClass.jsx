//pure에는 shouldComponentUpdate가 이미 구현되어 있다. props랑 state를 얕은 비교를 통해 비교한뒤,
// 변경이 있을때는 true를통해 리렌더링하고 변경된것이 없을때는 false를 리턴한다.
// * 얕은비교 : 변수와 문자열에서는 값을 비교한다, object에서는 reference값을 비교한다.
// shouldComponentUpdate는 불필요한 render를 줄이수 있기 때문에 react를 향상시키는데 좋다.

import React, { PureComponent } from "react";

class PureComponentClass extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      StateString: "react",
      StateArrayObj: ["react", { react: "200" }],
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
        <h2>PureComponentClass</h2>
        <button onClick={(e) => this.buttonClick("String")}>문자열 변경</button>
        <button onClick={(e) => this.buttonClick("ArrayObject")}>
          객체 배열 변경
        </button>
      </div>
    );
  }
}

export default PureComponentClass;
