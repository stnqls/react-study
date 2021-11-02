import React, { Component } from "react";
import datatype from "prop-types";

class PropsObjVal extends Component {
  render() {
    let { ObjectJson } = this.props;
    return <div style={{ padding: "0px" }}>{JSON.stringify(ObjectJson)}</div>;
  }
}

PropsObjVal.propTypes = {
  ObjectJson: datatype.shape({
    react: datatype.string,
    twohundred: datatype.number,
  }),
};
//twohundred의 값이 string으로 전달되었지만 number로 선언되어있어서 경고 메시지가 발생한다.
export default PropsObjVal;
