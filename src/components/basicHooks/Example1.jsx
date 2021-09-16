import React from "react";

export default class Example2 extends React.Component {
  state = { count: 0 };
  render() {
    const { count } = this.state;
    return (
      <div>
        <h2>class 컴포넌트</h2>
        <p>You clicked {count} times</p>
        <button onClick={this.click}>Click me</button>
      </div>
    );
  }
  click = () => {
    this.setState({ count: this.state.count + 1 });
  };
}
