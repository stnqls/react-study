import React, { Component } from "react";

class ForceUpdate extends Component {
  constructor(props) {
    super(props);
    this.state = {
      StateString: "react",
    };
  }
  StateChange = () => {
    this.state.StateString = "리액트";
    this.forceUpdate(); //화면을 강제로 새로고침한다.
  };
  render() {
    return (
      <div>
        <button onClick={(e) => this.StateChange("direct", e)}>
          state 직접변경
        </button>
        <br />
        [state 변경하기] StateString : {this.state.StateString};
      </div>
    );
  }
}

export default ForceUpdate;
