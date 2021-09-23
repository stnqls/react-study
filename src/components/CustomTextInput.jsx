//DOM 엘리먼트에 Ref사용하기

import React from "react";

class CustomTextInput extends React.Component {
  constructor(props) {
    super(props);
    this.textInput = null;
    this.setTextInputRef = (element) => {
      this.textInput = element;
    };
    this.focusTextInput = () => {
      if (this.textInput) this.textInput.focus();
    };
  }

  componentDidMount() {
    //마운트 되었을때 자동으로 input엘리먼트를 포커스 한다.
    this.focusTextInput();
  }

  render() {
    return (
      <div>
        <input type="text" ref={this.setTextInputRef} />
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
