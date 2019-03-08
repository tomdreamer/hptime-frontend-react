import React, { PureComponent } from "react";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
import { LinkContainer } from "react-router-bootstrap";
import "./IsEmergency.scss";

class IsEmergency extends PureComponent {
  constructor(props, context) {
    super(props, context);
    this.state = {
      show: false,
      open: false,
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
        <section className="bg-light">
          <div className="container">
            <div className="row">
              <div className="col-lg-12 pt-4">
                <h1 className="display-3 pt-4">
                  <span className="text-primary">Med</span>
                  <span className="text-muted">Direct</span>
                </h1>
              </div>
              {/* illustration */}
              <div className="col-lg-8  order-first order-md-1">
                <img
                  src="/images/illustrations/medicine.svg"
                  alt="Illustration calme et apaisante de deux docteurs dans un hopital"
                  className="img-fluid"
                />
              </div>
              {/* speech and CTA */}
              <div className="col-lg-4 py-4 pr-0">
                <p className="lead mb-3">
                  MedDirect vous aide a trouver les meilleurs soins d'urgence
                  adaptés à vos besoins.
                </p>
                <p className="text-muted">
                  Estimez les temps d'attente dans les centres de soins à
                  proximité et trouvez des alternatives sans attendre!
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
          </div>
        </section>

        <Modal
          centered
          show={this.state.show}
          onHide={this.handleClose}
        >
          <Modal.Header>
            <Modal.Title id="contained-modal-title-vcenter">
             
            
            <a href="#collapse"   className="font-weight-bold" data-toggle="collapse"> Urgence vitale? <i className="fas fa-info-circle"></i></a>
              <div id="collapse"  className="collapse">
              <ul>
                  <li className="font-weight-normal h6">Une perte de connaissance</li>
                  <li className="font-weight-normal h6">Des troubles neurologiques (paralysie d’un membre, ou soudaine faiblesse musculaire, troubles de la parole ou de la vision)</li>
                  <li className="font-weight-normal h6">Des douleurs thoraciques ou violentes douleurs d’apparition brutale</li>
                  <li className="font-weight-normal h6">Des difficultés respiratoires (étouffe, suffoque) : respiration rapide, bruyante</li>
                  <li className="font-weight-normal h6">Un saignement important</li>
                  <li className="font-weight-normal h6">Un violent traumatisme (accident, plaie)</li>
                  <li className="font-weight-normal h6">Une brûlure de la face ou étendue</li>
                </ul>
                
              </div>
            

            </Modal.Title>
          </Modal.Header>

          <Modal.Body>
            <p>
              Si vous pensez ne pas être dans une urgence vitale,
              appellez le SAMU, sinon merci de <b>cliquer sur Continuer.</b>
            </p>
          </Modal.Body>

          <Modal.Footer>
            <a href="tel:15">
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

        <footer className="bg-light">
          <div className="container">
            <div className="row">
              <p className="small text-muted p-5">
                Done with love by Christina Bailey, Christophe Begue, Thomas
                Lesage, Samuel Bouaroua, and Raphael Veil.
              </p>
            </div>
          </div>
        </footer>
      </>
    );
  }
}

export default IsEmergency;
