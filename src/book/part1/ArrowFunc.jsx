import React, { Component } from "react";

class ArrowFunc extends Component {
  constructor(props) {
    super(props);
    this.state = {
      arrowFuc: "React200",
      num: 3,
    };
  }

  componentDidMount() {
    Function1(1);
    this.Function2(1, 1);
    this.Function3(1, 3);
    this.Function4();
    this.Function5(0, 2, 3);

    function Function1(num1) {
      return console.log(num1 + ". Es5 Function");
    }
  }

  Function2 = (num1, num2) => {
    let num3 = num1 + num2;
    console.log(num3 + ". Arrow Function : " + this.state.arrowFuc);
  };

  //콜백함수 내부에서는 컴포넌트에 this로 접근할 수 없기 때문에 접근할 수 있는 변수에 this를 백업한다.
  //백업된 변수인 this_bind를 이용해 컴포넌트의 state변수에 접근할 수 있다.
  Function3() {
    var this_bind = this;
    setTimeout(function () {
      console.log(this_bind.state.num + ". Es5 Callback Function noBind : ");
      //콜백 함수 내부에서 this는 window객체이기 때문에 this로 접근할 경우 undefined에러가 발생한다.
      console.log(this.state.arrowFuc); //console.log(this_bind.state.arrowFuc);
    }, 100);
  }

  Function4() {
    setTimeout(
      function () {
        console.log("4. Es5 Callback Function Bind: " + this.state.arrowFuc);
      }.bind(this), // 콜백 함수에 this를 bind해주면 this를 컴포넌트로 사용할 수 있다.
      100
    );
  }

  Function5 = (num1, num2, num3) => {
    const num4 = num1 + num2 + num3;
    setTimeout(() => {
      console.log(num4 + ". Arrow Callback Fuction :" + this.state.arrowFuc); //화살표함수 안에서 사용할 경우 this를 컴포넌트로 사용할 수 있다.
    }, 100);
  };

  render() {
    return <h2>[This is ArrowFunction]</h2>;
  }
}

export default ArrowFunc;

//
