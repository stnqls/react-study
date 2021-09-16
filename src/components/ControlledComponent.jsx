import React from "react";

class ControlledComponent extends React.Component {
  state = {
    value: "",
  };
  render() {
    const { value } = this.state;
    return (
      <div>
        <h3>ControlledComponent</h3>
        <div>
          <input value={value} onChange={this.change} />
          <button onClick={this.click}>전송</button>
        </div>
      </div>
    );
  }
  change = (e) => {
    // console.log(e.target.value);
    this.setState({ value: e.target.value });
  };
  click = () => {
    console.log(this.state.value);
  };
}

export default ControlledComponent;
