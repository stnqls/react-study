import React, { Component } from "react";

class ValidationSample extends Component {
  state = {
    password: "",
    clicked: false,
    validated: false,
  };
  handleChange = (e) => {
    this.setState({
      password: e.target.value,
    });
  };
  handleButtonClick = () => {
    this.setState({
      clicked: true,
      validated: this.state.password === "000",
    });
    this.inputName.focus();
  };
  render() {
    return (
      <div>
        <input
          type="password"
          ref={(ref) => (this.inputName = ref)}
          value={this.state.password}
          onChange={this.handleChange}
          className={
            this.state.clicked
              ? this.state.validated
                ? console.log("success")
                : console.log("failure")
              : ""
          }
        />
        <button onClick={this.handleButtonClick}>검증하기</button>
      </div>
    );
  }
}

export default ValidationSample;
