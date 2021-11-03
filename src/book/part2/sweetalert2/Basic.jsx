import React from "react";
import Swal from "sweetalert2";

class Basic extends React.Component {
  componentDidMount() {
    // Swal.fire("1. SwwetAlert");
    // alert("2. alert()");

    Swal.fire("1. SweetAlert").then((result) => {
      alert("2. result.value: " + result.value);
    });
  }
  render() {
    return <h1>sweetalert2</h1>;
  }
}
export default Basic;

//Swal()함수는 비동기적으로 동작한다.
