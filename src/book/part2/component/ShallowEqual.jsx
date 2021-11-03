import React, { Component } from "react";
import { shallowEqualArrays } from "shallow-equal";

class ShallowEqual extends Component {
  constructor(props) {
    super(props);
    this.state = { StateString: "react" };
  }
  shouldComponentUpdate(nextProps, nextState) {
    //반환값이 true일때 render()함수를 실행시킨다.
    return !shallowEqualArrays(this.state, nextState);
  }
  componentDidMount() {
    const object = { react: "200" };
    const Array1 = ["리액트", object];
    const Array2 = ["리액트", object];
    const Array3 = ["리액트", { react: "200" }];

    console.log(
      "shallowEqualArrays(Array1, Array2) : " +
        shallowEqualArrays(Array1, Array2)
    );
    console.log(
      "shallowEqualArrays(Array2,Array3) : " +
        shallowEqualArrays(Array2, Array3)
    );
    this.setState({ StateString: "react" });
  }
  render() {
    console.log("render() 실행");
    return <div></div>;
  }
}

export default ShallowEqual;

// shallow-equal 패키지는 pureComponent에서 state값의 변경을 비교하는 것과 동일한 기능을 하는 함수를 제공한다.
// 문자열과 배열은 값만 비교하며, 객체는 참조값을 비교한다.
