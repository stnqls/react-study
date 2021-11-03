import React from "react";
import { Spinner } from "reactstrap";

class ReactstrapSpinner extends React.Component {
  render() {
    return (
      <>
        <Spinner color="secondary" />
        <Spinner type="grow" color="success" />
        <Spinner size="sm" color="info" />
      </>
    );
  }
}
export default ReactstrapSpinner;
