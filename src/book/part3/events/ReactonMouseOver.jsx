import React from "react";

class ReactonMouseOver extends React.Component {
  MouseOver = (props) => {
    console.log(props);
  };
  render() {
    return (
      <React.Fragment>
        <h3>onMouseOver</h3>
        <input type="text" onMouseOver={(e) => this.MouseOver("input")} />
        <select onMouseOver={(e) => this.MouseOver("select")}>
          <option value="react">react</option>
          <option value="200">200</option>
        </select>
      </React.Fragment>
    );
  }
}

export default ReactonMouseOver;
