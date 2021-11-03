import React from "react";
import { Alert, UncontrolledAlert } from "reactstrap";

class ReactstrapAlerts extends React.Component {
  render() {
    return (
      <div>
        <Alert color="light">Simple Alert [color: light]</Alert>
        <Alert color="dark">Simple Alert [color: dark]</Alert>
        <Alert color="primary">Simple Alert [color: primary]</Alert>
        <Alert color="secondary">Simple Alert [color: secondary]</Alert>
        <Alert color="success">Simple Alert [color: success]</Alert>
        <Alert color="danger">Simple Alert [color: danger]</Alert>
        <Alert color="info">Simple Alert [color: info]</Alert>
        <UncontrolledAlert color="warning">
          UncontrolledAlert [color: warning]
        </UncontrolledAlert>
      </div>
    );
  }
}

export default ReactstrapAlerts;
