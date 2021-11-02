import React, { Component } from "react";

class LifecycleEx3 extends Component {
  static getDerivedStateFromProps(props, state) {
    console.log("2. getDerivedStateFromProps Call : " + props.prop_value);
    return {};
  }
  constructor(props) {
    super(props);
    this.state = {};
    console.log("1. constructor Call");
  }
  render() {
    console.log("3. render Call");
    return <h2>[This is constructor function2]</h2>;
  }
}

export default LifecycleEx3;

//getDerivedStateFromProps(props, state)함수는 constructor()함수 다음으로 실행된다.
