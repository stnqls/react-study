// 자식 컴포넌트에서 props에 대한 자료형을 선언해 놓으면 부모 컴포넌트에서 넘어오는 props변수들의 자료형과 비교해준다.

import React, { Component } from "react";
import datatype from "prop-types";

class PropsDatatype extends Component {
  render() {
    let { String, Number, Boolean, Array, ObjectJson, Function } = this.props;

    return (
      <div style={{ padding: "0px" }}>
        <p>StringProps: {String}</p>
        <p>NumberProps: {Number}</p>
        <span>BooleanProps: {Boolean.toString()}</span>
        <p>ArrayProps: {Array.toString()}</p>
        <p>Object JsonProps: {JSON.stringify(ObjectJson)}</p>
        <p>FunctionProps: {Function}</p>
      </div>
    );
  }
}

PropsDatatype.propTypes = {
  String: datatype.string,
  Number: datatype.number,
  Boolean: datatype.bool,
  Array: datatype.array,
  ObjectJson: datatype.object,
  Function: datatype.func,
};

export default PropsDatatype;
