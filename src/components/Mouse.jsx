import React, { useState } from "react";

// class Mouse extends React.Component {
//   constructor(props) {
//     super(props);
//     this.handleMouseMove = this.handleMouseMove.bind(this);
//     this.state = { x: 0, y: 0 };
//   }

//   handleMouseMove(e) {
//     this.setState({
//       x: e.clientX,
//       y: e.clientY,
//     });
//   }

//   render() {
//     return (
//       <div
//         style={{
//           height: "600px",
//           width: "600px",
//           backgroundColor: "lightblue",
//         }}
//         onMouseMove={this.handleMouseMove}
//       >
//         {this.props.render(this.state)}
//       </div>
//     );
//   }
// }
// export default Mouse;

export default function Mouse(props) {
  const [move, setMove] = useState(0);
  function handleMouseMove(e) {
    setMove({
      x: e.clientX,
      y: e.clientY,
    });
  }
  return (
    <div
      style={{
        height: "600px",
        width: "600px",
        backgroundColor: "lightblue",
      }}
      onMouseMove={handleMouseMove}
    >
      {/* {this.props.render(move)} */}
      {props.render(move)}
    </div>
  );
}
