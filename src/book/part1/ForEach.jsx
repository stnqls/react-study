// 배열의 처음부터 마지막 순번까지 모두 작업하는 경우 forEach()문을 사용하는 것이 간편하다.
// 특정 순번에서만 배열 값을 사용하거나 변경해야 하는 상황이라면 for문을 사용해야한다.

import React from "react";

class ForEach extends React.Component {
  componentDidMount() {
    var For_Arr = [3, 2, 8, 8];
    var For_newArr = [];

    for (var i = 0; i < For_Arr.length; i++) {
      For_newArr.push(For_Arr[i]);
    }
    console.log("1. For_newArr : [" + For_newArr + "]");

    var ForEach_Arr = [3, 3, 9, 8];
    var ForEach_newArr = [];
    ForEach_Arr.forEach((result) => {
      ForEach_newArr.push(result);
    });
    console.log("2. ForEach_newArr : [" + ForEach_newArr + "]");
  }
  render() {
    return <h2>[This is ForEach]</h2>;
  }
}
export default ForEach;
