import React, { Component } from "react";

class ScrollBox extends Component {
  scrollBox = React.createRef();
  ScrollToBottom = () => {
    const { scrollHeight, clientHeight } = this.box;
    this.box.scrollTop = scrollHeight - clientHeight;
  };

  ScrollToTop = () => {
    this.box.scrollTo({
      top: 0,
    });
  };

  scrollLeft = () => {
    this.box.scrollTo({
      left: 0,
    });
  };

  scrollRight = () => {
    const move = this.innerBox.offsetWidth;
    this.box.scrollTo({
      left: move,
    });
  };

  // scroll = (move) => {
  //   this.box.scrollLeft = move;
  // };

  render() {
    const style = {
      border: "1px solid black",
      height: "300px",
      width: "300px",
      overflow: "auto",
      position: "relative",
    };
    const innerStyle = {
      width: "650px",
      height: "650px",
      background: "linear-gradient(white,black)",
    };
    return (
      <div
        style={style}
        ref={(ref) => {
          this.box = ref;
        }}
      >
        <div
          style={innerStyle}
          ref={(ref) => {
            this.innerBox = ref;
          }}
        ></div>
      </div>
    );
  }
}

export default ScrollBox;
