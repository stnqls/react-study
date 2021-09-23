import React from "react";
import Mouse from "./Mouse";
import Cat from "./Cat";

// class MouseTracker extends React.Component {
//   render() {
//     return (
//       <React.Fragment>
//         <h1>Move the mouse around!</h1>
//         <Mouse render={(mouse) => <Cat mouse={mouse} />} />
//       </React.Fragment>
//     );
//   }
// }
// export default MouseTracker;

export default function MouseTracker() {
  return (
    <React.Fragment>
      <h1>Move the mouse around!</h1>
      <Mouse render={(mouse) => <Cat mouse={mouse} />} />
    </React.Fragment>
  );
}
