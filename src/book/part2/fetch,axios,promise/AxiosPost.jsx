import React from "react";
import axios from "axios";

class AxiosPost extends React.Component {
  componentDidMount() {
    axios
      .post("https://jsonplaceholder.typicode.com/posts", {
        a: "react",
        b: 200,
      })
      .then((response) => {
        alert(response.data.a);
        console.log(response.data);
      });
  }
  render() {
    return <h1>Axios Post</h1>;
  }
}

export default AxiosPost;
