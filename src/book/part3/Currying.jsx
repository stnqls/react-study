import React from "react";

class Currying extends React.Component {
  plusNumOrString(c, d) {
    return c + d;
  }

  PlusFunc1(a) {
    return function (b) {
      return this.plusNumOrString(a, b);
    }.bind(this);
  }

  PlusFunc2 = (a) => (b) => this.plusNumOrString(a, b);

  PlusFunc(a) {
    return this.plusFunc1(a)(200);
  }

  render() {
    return (
      <React.Fragment>
        <input
          type="button"
          value="NumberPlus"
          onClick={(e) => alert(this.PlusFunc(100))}
        />
        <input
          type="button"
          value="StringPlus"
          onClick={(e) => alert(this.PlusFunc("REACT"))}
        />
      </React.Fragment>
    );
  }
}

export default Currying;

//함수의 재사용성을 높이기 위해 함수 자체를 return하는 함수이다.
