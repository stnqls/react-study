import React, { Component } from "react";

class PropsBoolean extends Component {
  render() {
    let { BooleanTrueFalse } = this.props;
    return (
      <div style={{ padding: "0px" }}>
        {BooleanTrueFalse ? "2. " : "1. "}
        {BooleanTrueFalse.toString()}
      </div>
    );
  }
}

export default PropsBoolean;
