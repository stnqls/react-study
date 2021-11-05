//Ref를 사용하면 element가 참조하는 변수에 접근해 변경하고 element를 제어할 수 있다.

import React from "react";

class ReactRef extends React.Component {
  constructor(props) {
    super(props);
    this.InputRef = React.createRef();
  }
  RefFocus = () => {
    this.InputRef.current.focus();
  };
  JavascriptFocus() {
    document.getElementById("id").focus();
  }
  render() {
    return (
      <React.Fragment>
        <input type="text" id="id" ref={this.InputRef} />
        <input type="button" value="Ref Focus" onClick={this.RefFocus} />
        <input
          type="button"
          value="Javascrilpt Focus"
          onClick={this.JavascriptFocus}
        />
      </React.Fragment>
    );
  }
}

export default ReactRef;
