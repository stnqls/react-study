import React from "react";
import cookie from "react-cookies";

class CookieSave extends React.Component {
  componentDidMount() {
    const expires = new Date();
    expires.setMinutes(expires.getMinutes() + 60);
    cookie.save("userid", "react200", {
      path: "/", //쿠키의 값을 저장하는 서버 경로
      expires, // 유효 시간
      //secure: true //웹브라우저와 웹 서버가 https로 통신하는 경우에만 쿠키가 저장된다.
      //httpOnly:true // document.cookie라는 자바스크립트 코드로 쿠키에 비정상적으로 접속하는 것을 막는 옵션이다.
    });
  }
  render() {
    return <h1>react-cookies save 사용하기</h1>;
  }
}

export default CookieSave;

//save함수는 세 가지 파라미터를 받는다. save(키,값,옵션)
