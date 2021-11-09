import React from "react";
import cookie from "react-cookies";

class CookieLoad extends React.Component {
  componentDidMount() {
    const expires = new Date();
    expires.setMinutes(expires.getMinutes() + 60);
    cookie.save("userid", "react300", {
      path: "/",
      expires,
    });
    setTimeout(function () {
      alert(cookie.load("userid"));
    }, 1000);
  }
  render() {
    return <h1>react-cookies load 사용하기</h1>;
  }
}

export default CookieLoad;

//load 함수는 웹 브라우저에 남아있는 쿠키에 key로 접근해 value를 가져오는 함수이다.
