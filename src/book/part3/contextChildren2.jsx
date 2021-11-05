import React from "react";
import { Consumer } from "./ContextApi";

class contextChildren2 extends React.Component {
  render() {
    return (
      <Consumer>
        {(contextValue) => <h3> {`contextValue : ${contextValue}`}</h3>}
      </Consumer>
    );
  }
}

export default contextChildren2;
