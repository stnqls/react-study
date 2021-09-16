import React from "react";

class UncontrolledComponent extends React.Component {
  inputRef = React.createRef();
  render() {
    console.log("initial render", this.inputRef);
    return (
      <div>
        <h3>UncontrolledComponent</h3>
        <div>
          <input ref={this.inputRef} />
          <button onClick={this.click}>전송</button>
        </div>
      </div>
    );
  }

  componentDidMount() {
    console.log("componentDidMount", this.inputRef);
  }

  click = () => {
    //input 엘리먼틔의 현재 상태 값을 꺼내서 전송한다.
    // const input = document.querySelector("#my-input");
    // console.log(input);
    console.log(this.inputRef.current.value);
  };
}

export default UncontrolledComponent;
