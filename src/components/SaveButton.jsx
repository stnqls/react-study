import FooterButton from "./FooterButton";
import React from "react";

export default class SaveButton extends React.Component {
  constructor(props) {
    super(props);
    this.state = { fetching: false };
    this.onClick = this.onClick.bind(this);
  }

  render() {
    const { fetching } = this.state;
    return (
      <FooterButton disabled={fetching} onClick={this.onClick}>
        {fetching ? "저장중..." : "저장"}
      </FooterButton>
    );
  }
  onClick() {
    this.setState({ fetching: true });
    this.save(() => this.setState({ fetching: false }));
  }
  save(callback) {
    setTimeout(callback, 1000);
  }
}
