//DOM 엘리먼트에 Ref사용하기

import React from "react";

class CustomTextInput extends React.Component {
  constructor(props) {
    super(props);
    this.textInput = React.createRef();
    this.focusTextInput = this.focusTextInput.bind(this);
  }
  focusTextInput() {
    this.textInput.current.focus();
  }
  render() {
    return (
      <div>
        <input type="text" ref={this.textInput} />
        <input
          type="button"
          value="Focus the text input"
          onClick={this.focusTextInput}
        />
      </div>
    );
  }
}

export default CustomTextInput;

// ref를 수정하는 작업은 componentDidMount 또는 componentDidUpdate 생명주기 메서드가 호출되기 전에 이루어진다.
