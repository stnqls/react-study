import React from "react";
import { Link } from "react-router-dom";

class ReactRouter extends React.Component {
  render() {
    return (
      <React.Fragment>
        <h1>path='/'</h1>
        <Link to={"/reactRouter2"}>reactRouter2</Link>
      </React.Fragment>
    );
  }
}

export default ReactRouter;
