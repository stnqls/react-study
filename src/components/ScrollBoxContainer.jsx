import React, { Component } from "react";
import ScrollBox from "./ScrollBox";

class ScrollBoxContainer extends Component {
  render() {
    return (
      <div>
        <ScrollBox
          ref={(ref) => {
            this.scrollBox = ref;
          }}
        />
        <button
          onClick={() => {
            this.scrollBox.ScrollToBottom();
          }}
        >
          맨 밑으로
        </button>
        <button
          onClick={() => {
            this.scrollBox.ScrollToTop();
          }}
        >
          맨 위로
        </button>
        <button
          onClick={() => {
            this.scrollBox.scrollLeft();
          }}
        >
          왼쪽
        </button>
        <button
          onClick={() => {
            this.scrollBox.scrollRight();
          }}
        >
          오른쪽
        </button>
      </div>
    );
  }
}

export default ScrollBoxContainer;
