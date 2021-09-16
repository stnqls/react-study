import React from "react";

export default function Example3() {
  const [state, setState] = React.useState({ count: 0 });
  return (
    <div>
      <h2>function 컴포넌트</h2>
      <p>You clicked {state.count} times</p>
      <button onClick={click}>Click me</button>
    </div>
  );

  function click() {
    setState((state) => {
      return {
        count: state.count + 1,
      };
    });
  }
}
