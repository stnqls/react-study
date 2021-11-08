import React from "react";
import { Consumer } from "./ContextApi2";

class contextChildren extends React.Component {
  render() {
    return (
      <Consumer>
        {(contextValue) => (
          <button onClick={() => contextValue.setStateFunc("react200")}>
            {contextValue.name}_button
          </button>
        )}
      </Consumer>
    );
  }
}

export default contextChildren;
