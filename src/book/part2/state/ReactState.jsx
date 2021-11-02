import React, { Component } from "react";

class ReactState extends Component {
  constructor(props) {
    super(props);
    this.state = {
      StateString: this.props.reactString,
      StateNumber: 200,
    };
  }
  render() {
    return (
      <div>
        {this.state.StateString} {this.state.StateNumber}
      </div>
    );
  }
}

export default ReactState;

//가장 먼저 실행되는 생성자 함수 constructor안에서 state 변수의 초기값을 정의한다.
