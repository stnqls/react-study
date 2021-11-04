import React from "react";

class Promise extends React.Component {
  componentDidMount() {
    new Promise((resolve) => {
      setTimeout(function () {
        resolve("react");
      }, 1500);
    });
    // .then(function (result) {
    //   console.log(result);
    //   return result + 200;
    // })
    // .then((result) => {
    //   console.log(result);
    // });
  }
  render() {
    return <h1>Promise</h1>;
  }
}
export default Promise;

// 콜백함수와 같이 비동기적으로 동작하는 코드를 동기적으로 구현할 때 사용한다.

//Promis가 대기상태에서 이행 상태로 변할때 then()함수가 실행된다.
