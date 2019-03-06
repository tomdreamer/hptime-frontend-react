import React, { PureComponent } from "react";
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

  render() {
    return (
      <>
        <section className="bg-white pt-2">
          <div className="container bg-header">
            <div className="row">
              <div className="col-lg-12">
                <h1 className="display-3">
                  <span className="text-primary">Med</span>Direct
                </h1>
              </div>
              {/* speech and CTA */}
              <div className="col-lg-4 align-self-center pt-2">
                <div className="py-5 pl-5">
                  <p className="pt-4 mt-5">
                    MedDirect connects you with the best emergency health care
                    suited for <i>your</i> needs. Find wait times at health
                    centers nearby and access alternative emergency centers with
                    little to no wait!
                  </p>
                  <Button
                    variant="primary"
                    size="lg"
                    className="mt-3"
                    onClick={this.handleShow}
                  >
                    Commencer
                  </Button>
                </div>
              </div>
              {/* illustration */}
              <div className="col-lg-8 align-self-center">
                <img
                  src="/images/illustrations/medicine.svg"
                  alt="Calm and soothing illustration of two doctors waiting for you in an hospital"
                  className="img-fluid pb-3"
                />
              </div>
            </div>
          </div>
        </section>

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
              Please only click continue if your medical emergency is <b>NOT</b>{" "}
              immediatly life threatening to you or those around you. MedDirect
              should not be used to self diagnose health issues.
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

        <footer className="fixed-bottom" />
      </>
    );
  }
}

export default IsEmergency;
