import React from "react";
import Children from "./contextChildren";

const { Provider, Consumer } = React.createContext();
export { Consumer };

class ContextApi extends React.Component {
  render() {
    return (
      <Provider value="React200">
        <Children />
      </Provider>
    );
  }
}

export default ContextApi;

//context를 사용하면 중간에 있는 엘리먼트들에게 props를 넘겨주지 않아도 된다.
//context를 사용하면 컴포넌트를 재사용하기 어려워진다.
