import React from "react";

export default function Example5() {
  const [count, setCount] = React.useState(0);
  React.useEffect(() => {
    console.log("componentDidMout", count);
    return () => {
      //cleanup
      // dependency에의해 useEffect가 실행되기 직전에 실행된다.
    };
  }, []);
  React.useEffect(() => {
    console.log("componentDidMout & componentDidUpdate", count);
    return () => {
      console.log("cleanup by count", count);
    };
  }, [count]);
  return (
    <div>
      <h2>function 컴포넌트 ex5</h2>
      <p>You clicked {count} times</p>
      <button onClick={click}>Click me</button>
    </div>
  );

  function click() {
    setCount(count + 1);
  }
}
