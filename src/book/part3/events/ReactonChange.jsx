import React from "react";

class ReactonChange extends React.Component {
  change = (props) => {
    console.log(props.target.value);
  };
  render() {
    return (
      <React.Fragment>
        <input type="text" onChange={this.change} />
        <select name="" id="" onChange={this.change}>
          <option value="react">react</option>
          <option value="200">200</option>
        </select>
      </React.Fragment>
    );
  }
}

export default ReactonChange;
