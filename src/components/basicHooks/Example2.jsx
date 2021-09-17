import React from "react";

export default function Example2() {
  const [count, setCount] = React.useState(0);
  return (
    <div>
      <h2>function 컴포넌트 ex2</h2>
      <p>You clicked {count} times</p>
      <button onClick={click}>Click me</button>
    </div>
  );

  function click() {
    setCount(count + 1);
  }
}
