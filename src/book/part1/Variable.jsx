import React, { Component } from "react";

class Variable extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  componentDidMount() {
    var varName = "react";
    console.log("varName1 : " + varName);
    var varName = "200";
    console.log("varName2 : " + varName);

    let letName = "react";
    console.log("letName1 : " + letName);
    // let letName = "200"; Parsing error
    letName = "react200";
    console.log("letName2 : " + letName);

    const constName = "react";
    console.log("constName: " + constName);
    // constName = "react200"; TypeError
  }

  render() {
    return <h2>[This is Variable]</h2>;
  }
}

export default Variable;

// var : 재선언, 재할당을 허용한다.
// let : 재선언은 허용하지 않고, 재할당을 허용한다.
// const : 재선언, 재할당을 허용하지 않는다.
