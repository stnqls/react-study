import React from "react";

class ReactonMouseMove extends React.Component {
  MouseMove = (props) => {
    console.log(props);
  };

  render() {
    return (
      <React.Fragment>
        <div>
          <h3>div onMouseMove</h3>
        </div>
        <input type="text" onMouseMove={(e) => this.MouseMove("input")} />
        <select onMouseMove={(e) => this.MouseMove("select")}>
          <option value="react">react</option>
          <option value="200">200</option>
        </select>
      </React.Fragment>
    );
  }
}

export default ReactonMouseMove;
