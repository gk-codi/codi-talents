// modules imports
import React from 'react';
import { Modal, Button } from 'react-bootstrap';
// files imports
import FormInstance from '../ContactFormInstance';

class ContactFormModal extends React.Component {
  // returned the structure for the contact form
  // used FormInstace to render the body of the form
  constructor(props) {
    super(props);

    this.handleShow = this.handleShow.bind(this);
    this.handleClose = this.handleClose.bind(this);

    this.state = {
      show: false,
      myName: this.props.name,
    };
  }

  componentDidMount() {
    const newName = this.state.myName.substring(
      0,
      this.state.myName.length - 2,
    );
    this.setState({ myName: newName });
  }

  handleClose() {
    this.setState({ show: false });
  }

  handleShow() {
    this.setState({ show: true });
  }

  render() {
    return (
      <div>
        <Button
          style={{ textTransform: 'capitalize' }}
          bsStyle="primary"
          onClick={this.handleShow}
        >
          Contact {this.state.myName}
        </Button>

        <Modal show={this.state.show} onHide={this.handleClose}>
          <Modal.Header closeButton>
            <Modal.Title>Codi Cycle 2</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <h1>Contact {this.props.name}</h1>
            <FormInstance student_name={this.state.myName} />
          </Modal.Body>
          <Modal.Footer>
            <Button onClick={this.handleClose}>Close</Button>
          </Modal.Footer>
        </Modal>
      </div>
    );
  }
}

export default ContactFormModal;
