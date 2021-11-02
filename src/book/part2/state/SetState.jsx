import React, { Component } from "react";

class SetState extends Component {
  constructor(props) {
    super(props);
    this.state = {
      StateString: "react",
    };
  }
  StateChange = (flag) => {
    if (flag === "direct") {
      // console.log(this.state.StateString);
      this.state.StateString = "direct 리액트";
      // console.log(this.state.StateString);
    } else if (flag === "setState") {
      this.setState({ StateString: "setState 리액트" });
    }
  };
  render() {
    return (
      <div>
        <button onClick={() => this.StateChange("direct")}>
          state 직접 변경
        </button>
        <button onClick={() => this.StateChange("setState")}>
          setState로 변경
        </button>
        <br />
        [state 변경하기] StateString : {this.state.StateString}
      </div>
    );
  }
}

export default SetState;

// direct 리액트는 값을 변경하지만, render함수를 다시 호출하지 않아 화면에 바뀐값이 그려지지 않는다.
