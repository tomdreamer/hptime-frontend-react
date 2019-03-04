import React, { PureComponent } from "react";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
import SpeedDial from "./SpeedDial.js";

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

  render() {
    return (
      <div className="bg-light">
        <div className="bg-header w-75 mx-auto d-flex">
          <div className="d-flex justify-content-start pt-5"> </div>
          <h1 className="display-3">Medirect</h1>
          <div className="align-self-end">
            <div className="p-5 d-flex justify-content-start flex-column">
              <div className="px-5">
                <Button variant="primary" size="lg" onClick={this.handleShow}>
                  Commencer
                </Button>
              </div>
              <div className="px-5 p-2 w-75">
                <p>
                  Usce lacinia viverra leo non dignissim. Morbi ac lectus vel
                  arcu commodo tincidunt nec et mi. Aliquam tellus libero,
                  aliquam id commodo ut.
                </p>
              </div>
            </div>
          </div>

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
          <footer className="fixed-bottom">
            <SpeedDial />
          </footer>
        </div>
      </div>
    );
  }
}

export default IsEmergency;
