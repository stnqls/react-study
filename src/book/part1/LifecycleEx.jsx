import React, { Component } from "react";

class LifecycleEx extends Component {
  render() {
    console.log("3. render call");
    return <h2>[This is render function]</h2>;
  }
}

export default LifecycleEx;

//render(), constructor(), getDerivedStateFormProps(), componentDidMount() 함수는 component의 생성 과정에 속한다.
