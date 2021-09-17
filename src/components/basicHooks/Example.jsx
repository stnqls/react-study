import { useState } from "react";

export default function Counter() {
  const [count, setCount] = useState(0);
  return (
    <div>
      <p>you clicked {count} times</p>
      <button onClick={click}>click me</button>
      <button onClick={handleAlertClick}>show alert</button>
    </div>
  );
  function click() {
    setCount(count + 1);
  }
  function handleAlertClick() {
    setTimeout(() => {
      alert("you clicked on: " + count);
    }, 3000);
  }
}
