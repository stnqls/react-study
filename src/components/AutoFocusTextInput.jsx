import React from "react";
import CustomTextInput from "./CustomTextInput";

class AutoFocusTextInput extends React.Component {
  constructor(props) {
    super(props);
    this.textInput = React.createRef();
  }
  componentDidMount() {
    this.textInput.current.focusTextInput();
    console.log("componentDidMount");
  }
  render() {
    return <CustomTextInput ref={this.textInput} />;
  }
}

export default AutoFocusTextInput;

// CustomTextInput이 클래스 컴포넌트일때에만 작동한다.
