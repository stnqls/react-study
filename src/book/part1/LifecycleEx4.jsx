import React, { Component } from "react";

class LifecycleEx4 extends Component {
  static getDerivedStateFromProps(props, state) {
    console.log("2.getDerivedStateFormProps Call: " + props.prop_value);
    return {
      tmp_state: props.prop_value,
    };
  }
  constructor(props) {
    super(props);
    this.state = {};
    console.log("1. constructor Call");
  }
  componentDidMount() {
    console.log("4. componentDidMount Call");
    console.log("5. tmp_state : " + this.state.tmp_state);
  }
  render() {
    console.log("3. render Call");
    return <h2>[This is Componentdidmount function]</h2>;
  }
}

export default LifecycleEx4;

// componentDidMount()함수는 render()함수가 return되는 html형식의 코드를 화면에 그려준 후 실행된다.
// 화면이 모두 그려진 후에 실행돼야 하는 이벤트 처리, 초기화 등 가장 많이 활용되는 함수이다.
