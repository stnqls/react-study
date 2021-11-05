import React from "react";

class ReactonSubmit extends React.Component {
  submit(e) {
    const inputValue = document.getElementById("inputId").value;
    console.log("inputValue:" + inputValue);
    e.preventDefault(); //submit이후에 페이지 새로고침을 방지할 수 있다.
  }
  render() {
    return (
      <React.Fragment>
        <form onSubmit={this.submit}>
          <input type="text" name="inputName" id="inputId" />
          <input type="submit" value="Submit" />
        </form>
      </React.Fragment>
    );
  }
}

export default ReactonSubmit;
