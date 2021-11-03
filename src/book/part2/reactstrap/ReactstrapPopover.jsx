import React from "react";
import {
  Button,
  UncontrolledPopover,
  PopoverHeader,
  PopoverBody,
} from "reactstrap";

class ReactstrapPopover extends React.Component {
  render() {
    return (
      <>
        <Button id="Popover_id" type="button">
          Popover button
        </Button>
        <UncontrolledPopover placement="bottom" target="Popover_id">
          <PopoverHeader>React 200</PopoverHeader>
          <PopoverBody>PopoberBody~!</PopoverBody>
        </UncontrolledPopover>
      </>
    );
  }
}
export default ReactstrapPopover;
