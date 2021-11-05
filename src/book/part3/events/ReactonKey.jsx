import React from "react";

class ReactonKey extends React.Component {
  keyEvent(props) {
    console.log(props.target.value);
  }

  render() {
    return (
      <React.Fragment>
        <h3>onKey</h3>
        onKeyDown : <input type="text" onKeyDown={(e) => this.keyEvent(e)} />
        <br />
        onKeyPress : <input type="text" onKeyPress={(e) => this.keyEvent(e)} />
        <br />
        onKeyUp : <input type="text" onKeyUp={(e) => this.keyEvent(e)} />
      </React.Fragment>
    );
  }
}

export default ReactonKey;

// onKeyDown : 사용자가 키를 입력했을때 실행된다.
// onKeyPress : 사용자가 키를 누르면 실행되고 키가 입력된다.
// onKeyUp : 사용자가 키를 눌렀다 땠을때 실행된다.
