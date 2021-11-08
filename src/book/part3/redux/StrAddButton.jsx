import React from "react";
import { connect } from "react-redux";
import { add } from "./actions";

class StrAddButton extends React.Component {
  render() {
    // return <input type="button" value="Add200" onClick={this.addString} />;
    return (
      <input type="button" value="Add200" onClick={this.props.addString} />
    );
  }
  addString = () => {
    this.props.store.dispatch(add());
  };
}

export default StrAddButton;

//dispatch함수를 사용하면 스토어 데이터를 변경할 수 있다.
//dispatch함수가 실행되면 리듀서 함수는 액션 값을 참조해 작업을 실행한다.
