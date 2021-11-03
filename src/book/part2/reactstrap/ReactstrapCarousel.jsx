import React from "react";
import { UncontrolledCarousel } from "reactstrap";

const items = [
  {
    src: "./images/1.png",
    altText: "슬라이드1 이미지 대체 문구",
    caption: "슬라이드1 설명",
    header: "슬라이드1 제목",
  },
  {
    src: "./images/2.png",
    altText: "슬라이드2 이미지 대체 문구",
    caption: "슬라이드2 설명",
    header: "슬라이드2 제목",
  },
  {
    src: "./images/3.png",
    altText: "슬라이드3 이미지 대체 문구",
    caption: "슬라이드3 설명",
    header: "슬라이드3 제목",
  },
];

class ReactstrapCarousel extends React.Component {
  render() {
    return <UncontrolledCarousel items={items} />;
  }
}

export default ReactstrapCarousel;
