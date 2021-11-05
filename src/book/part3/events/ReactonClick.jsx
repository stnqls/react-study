import React from "react";

class ReactonClick extends React.Component {
  buttonClick = (param) => {
    if (typeof param != "string") param = "Click a";
    console.log("param:" + param);
  };
  render() {
    return (
      <React.Fragment>
        <button onClick={(e) => this.buttonClick("Clickbutton")}>
          Click button
        </button>
        <div onClick={(e) => this.buttonClick("click div")}>Click div</div>
        <a href="/" onClick={this.buttonClick}>
          Click a
        </a>
      </React.Fragment>
    );
  }
}

export default ReactonClick;
