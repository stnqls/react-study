import React from "react";
import axios from "axios";

class AxiosGet extends React.Component {
  componentDidMount() {
    axios.get("https://jsonplaceholder.typicode.com/posts").then((response) => {
      alert(response.data[0].title);
    });
  }

  render() {
    return <h1>Axios Get</h1>;
  }
}
export default AxiosGet;

//url호출이 완료되면 then함수가 실행된다. 이때 호출 결과로 response가 반환된다.
