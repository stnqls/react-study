import React, { Component } from "react";
import datatype from "prop-types";
class PropsRequired extends Component {
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
PropsRequired.propTypes = {
  ReactNumber: datatype.isRequired,
};
export default PropsRequired;
