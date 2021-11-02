import React, { Component } from "react";

class PropsNode extends Component {
  render() {
    return <div>{this.props.children}</div>;
  }
}

export default PropsNode;
