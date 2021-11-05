import React from "react";

class ReactonMouseOut extends React.Component {
  MouseOut(props) {
    console.log(props);
  }
  render() {
    return (
      <React.Fragment>
        <h3>onMouseOut</h3>
        <input type="text" onMouseOut={(e) => this.MouseOut("input")} />
        <select onMouseOut={(e) => this.MouseOut("select")}>
          <option value="react">react</option>
          <option value="200">200</option>
        </select>
      </React.Fragment>
    );
  }
}

export default ReactonMouseOut;
