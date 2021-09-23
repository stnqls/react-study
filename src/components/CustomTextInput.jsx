//DOM 엘리먼트에 Ref사용하기

import { useRef } from "react";

// class CustomTextInput extends React.Component {
//   constructor(props) {
//     super(props);
//     this.textInput = React.createRef();
//     this.focusTextInput = this.focusTextInput.bind(this);
//   }
//   focusTextInput() {
//     this.textInput.current.focus();
//   }
//   render() {
//     return (
//       <div>
//         <input type="text" ref={this.textInput} />
//         <input
//           type="button"
//           value="Focus the text input"
//           onClick={this.focusTextInput}
//         />
//       </div>
//     );
//   }
// }

// export default CustomTextInput;

// ref를 수정하는 작업은 componentDidMount 또는 componentDidUpdate 생명주기 메서드가 호출되기 전에 이루어진다.

export default function CustomTextInput(props) {
  const textInput = useRef(null);

  function handleClick() {
    textInput.current.focus();
  }

  return (
    <div>
      <input type="text" ref={textInput} />
      <input type="button" value="Focus the text input" onClick={handleClick} />
    </div>
  );
}

// 함수 컴포넌트는 인스턴스가 없기 때문에 ref어트리뷰트를 사용하지 못한다.
// DOM엘리먼트나 클래스 컴포넌트의 인스턴스에 접근하기 위해 ref어트리뷰트를 함수 컴포넌트에서 사용하는것은 가능하다.
