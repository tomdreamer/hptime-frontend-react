import React, { PureComponent } from "react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
import { LinkContainer } from "react-router-bootstrap";
import "./IsEmergency.scss";

class IsEmergency extends PureComponent {
  constructor(props, context) {
    super(props, context);
    this.state = {
      show: false
    };
    this.handleShow = this.handleShow.bind(this);
    this.handleClose = this.handleClose.bind(this);
  }

  // show and hide modal
  handleClose() {
    this.setState({ show: false });
  }

  handleShow() {
    this.setState({ show: true });
  }

  // open on page load
  componentDidMount() {
    this.handleShow();
  }

  render() {
    return (
      <Row>
        <Col>
          {/* <Button variant="primary" onClick={this.handleShow}>
            Launch demo modal
          </Button> */}

          <Modal
            size="md"
            aria-labelledby="contained-modal-title-vcenter"
            show={this.state.show}
            onHide={this.handleClose}
          >
            <Modal.Header>
              <Modal.Title id="contained-modal-title-vcenter">
                Est-ce une urgence vitale?
              </Modal.Title>
            </Modal.Header>

            <Modal.Body>
              <p>
                Sed ut perspiciatis unde omnis iste natus error sit voluptatem
                accusantium doloremque laudantium, totam rem aperiam, eaque ipsa
                quae.
              </p>
            </Modal.Body>

            <Modal.Footer>
              <a href="tel:+3315">
                <Button variant="danger">
                  <i className="fas fa-phone" /> Appeller le SAMU (15)
                </Button>
              </a>

              <LinkContainer to="/form">
                <Button variant="primary">
                  <i className="fas fa-arrow-right" /> Continuer
                </Button>
              </LinkContainer>
            </Modal.Footer>
          </Modal>
        </Col>
      </Row>
    );
  }
}

export default IsEmergency;
