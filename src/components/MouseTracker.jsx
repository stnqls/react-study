import React from "react";
import Mouse from "./Mouse";

class MouseTracker extends React.Component {
  render() {
    return (
      <React.Fragment>
        <h1>Move the mouse around!</h1>
        <Mouse />
      </React.Fragment>
    );
  }
}
export default MouseTracker;
