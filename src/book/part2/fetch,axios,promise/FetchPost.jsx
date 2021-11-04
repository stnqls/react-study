import React from "react";

class FetchPost extends React.Component {
  componentDidMount = async () => {
    const response = await fetch(" http://localhost:3000", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: {
        a: "react",
        b: 200,
      },
    });
    const body = await response.json();
    console.log(body.body);
  };

  render() {
    return <h1>Fetch Post</h1>;
  }
}

export default FetchPost;

//POST방식은 서버의 상태나 데이터를 변경하는 등의 수행작업에 사용된다. URL뒤에 파라미터를 표시하지 않고 사용할 수 있다.
//POST방식은 method와Content-Type(JSON형태의 데이터 사용)을 지정해줘야한다.
