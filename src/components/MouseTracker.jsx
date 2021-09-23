import React from "react";

class MouseTracker extends React.Component {
  constructor(props) {
    super(props);
    this.handleMouseMove = this.handleMouseMove.bind(this);
    this.state = { x: 0, y: 0 };
  }

  handleMouseMove(e) {
    this.setState({
      x: e.clientX,
      y: e.clientY,
    });
  }
  render() {
    return (
      <div
        style={{
          height: "600px",
          width: "600px",
          backgroundColor: "lightblue",
        }}
        onMouseMove={this.handleMouseMove}
      >
        <h1>Move the mouse around!</h1>
        <p>
          The current mouse position is ({this.state.x}, {this.state.y})
        </p>
      </div>
    );
  }
}
export default MouseTracker;
