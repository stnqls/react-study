import React, { useReducer } from "react";

// function Counter() {
//   const [number, setNumber] = useState(0);
//   function onIncrease() {
//     setNumber(number + 1);
//   }
//   function onDecrease() {
//     setNumber(number - 1);
//   }
//   return (
//     <div>
//       <h1>{number}</h1>
//       <button onClick={onIncrease}>+1</button>
//       <button onClick={onDecrease}>-1</button>
//     </div>
//   );
// }

// export default Counter;

//reducer는 현재 상태와 액션 객체를 파라미터로 받아와서 새로운 상태를 반환해주는 함수이다.

function reducer(state, action) {
  //새로운 상태를 만드는 로직, return하는 상태는 컴포넌트가 지닐 새로운 상태가 된다.
  //action은 업데이트를 위한 정보를 가지고 있다.(객체의 형태는 자유이다.)
  switch (action.type) {
    case "INCREMENT":
      return state + 1;
    case "DECREMENT":
      return state - 1;
    default:
      return state;
  }
}

function Counter() {
  // const [state,dispatch] = useReducer(reducer, initialState);
  // state : 앞으로 컴포넌트에서 사용 할 수 있는 상태
  // dispatch : 액션을 발생시키는 함수
  const [number, dispatch] = useReducer(reducer, 0);

  const onIncrease = () => {
    dispatch({ type: "INCREMENT" });
  };
  const onDecrease = () => {
    dispatch({ type: "DECREMENT" });
  };
  return (
    <div>
      <h1>{number}</h1>
      <button onClick={onIncrease}>+1</button>
      <button onClick={onDecrease}>-1</button>
    </div>
  );
}

export default Counter;
