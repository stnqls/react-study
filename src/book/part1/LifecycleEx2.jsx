import React, { Component } from "react";

class LifecycleEx2 extends Component {
  constructor(props) {
    super(props);
    this.state = {};
    console.log("1. constructor call");
  }

  render() {
    console.log("3. render call");
    return <h2>[This is constructor function]</h2>;
  }
}

export default LifecycleEx2;

//constructor(props) 함수는 생명주기 함수 중 가정 먼저 실행되며, 처음 한 번만 호출된다.
//component 내부에서 사용되는 변수(state)를 선언하고, 부모 객체에서 전달받은 변수 (props)를 초기화 할때 사용한다.
// super()함수는 가장 위에 호출해야 한다.
