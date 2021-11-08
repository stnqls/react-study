import React from "react";
import { add } from "./actions";

class StrAddButton extends React.Component {
  render() {
    return <input type="button" value="Add200" onClick={this.addString} />;
  }
  addString = () => {
    this.props.store.dispatch(add());
  };
}

export default StrAddButton;
