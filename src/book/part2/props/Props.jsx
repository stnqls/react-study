import React from "react";

class Props extends React.Component {
  render() {
    console.log(this.props);
    let props_value = this.props.props_val;
    props_value += " from App.js";
    return <div>{props_value}</div>;
  }
}

export default Props;
