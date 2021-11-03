import React from "react";
import { Button, Fade } from "reactstrap";

class ReactstrapFade extends React.Component {
  constructor(props) {
    super(props);
    this.state = { fadeInOut: true };
  }
  toggle = (e) => {
    this.setState({ fadeInOut: !this.state.fadeInOut });
  };
  render() {
    return (
      <div>
        <Button color="success" onClick={this.toggle}>
          Fade In/Out
        </Button>
        <Fade in={this.state.fadeInOut} tag="h1">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit
        </Fade>
      </div>
    );
  }
}

export default ReactstrapFade;
