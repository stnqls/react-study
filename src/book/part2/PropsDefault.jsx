import React, { Component } from "react";

class PropsDefault extends Component {
  render() {
    let { ReactString, ReactNumber } = this.props;
    return (
      <div>
        {ReactString}
        {ReactNumber}
      </div>
    );
  }
}
PropsDefault.defaultProps = {
  ReactString: "리액트",
  ReactNumber: 400,
};
export default PropsDefault;
