import React from "react";
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from "reactstrap";

class ReactstrapModal extends React.Component {
  constructor(props) {
    super(props);
    this.state = { modal: false };
  }
  toggle = () => {
    this.setState({ modal: !this.state.modal });
  };
  render() {
    return (
      <React.Fragment>
        <Button color="warning" onClick={this.toggle}>
          Modal 버튼{" "}
        </Button>
        <Modal isOpen={this.state.modal} fade={true} toggle={this.toggle}>
          <ModalHeader>Modal Header</ModalHeader>
          <ModalBody>Modal Body~~~~~~!</ModalBody>
          <ModalFooter>
            <Button color="primary" onClick={this.toggle}>
              확인
            </Button>
            <Button color="secondary" onClick={this.toggle}>
              닫기
            </Button>
          </ModalFooter>
        </Modal>
      </React.Fragment>
    );
  }
}

export default ReactstrapModal;
