import React from "react";

class FetchGet extends React.Component {
  componentDidMount = async () => {
    const response = await fetch("https://jsonplaceholder.typicode.com/posts");
    const body = await response.json();
    alert(body[0].title);
  };
  render() {
    return <h1>fetch get</h1>;
  }
}

export default FetchGet;

//get 방식은 url? 뒤에 파라미터명=값 형태로 필요한 데이터를 전달해 주로 데이터 조회나 검색 등의 기능에 사용된다.
