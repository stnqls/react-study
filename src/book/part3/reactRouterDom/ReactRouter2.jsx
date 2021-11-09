import React from "react";
import { Link } from "react-router-dom";
class ReactRouter2 extends React.Component {
  render() {
    return (
      <React.Fragment>
        <h1>path='/reactRouter2'</h1>
        <Link to={"/"}>reactRouter</Link>
      </React.Fragment>
    );
  }
}

export default ReactRouter2;
