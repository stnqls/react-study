import React from "react";
import cookie from "react-cookies";
class CookieRemove extends React.Component {
  componentDidMount() {
    const expires = new Date();
    expires.setMinutes(expires.getMinutes() + 60);
    cookie.save("uerid", "react400", {
      path: "/",
      expires,
    });
    setTimeout(function () {
      cookie.remove("userid", { path: "/" });
    }, 2000);
    setTimeout(function () {
      alert(cookie.load("userid"));
    }, 3000);
  }

  render() {
    return <h1>react-cookies remove 사용하기</h1>;
  }
}

export default CookieRemove;
