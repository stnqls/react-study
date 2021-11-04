import React from "react";

class PromiseCatch extends React.Component {
  componentDidMount() {
    new Promise((resolve, reject) => {
      reject(Error("Error Info"));
    })
      .then((result) => console.log("then " + result))
      .catch((result) => console.log("catch :" + result));
  }
  render() {
    return <h1>Promise Catch</h1>;
  }
}

export default PromiseCatch;
