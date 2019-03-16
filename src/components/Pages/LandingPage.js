import React, { PureComponent } from "react";

// Components
import { LinkContainer } from "react-router-bootstrap";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
import posed from "react-pose";
import SpeedDial from "../SpeedDial";

// Styling
import "./LandingPage.scss";
// dig https://codeburst.io/when-to-use-component-or-purecomponent-a60cfad01a81

const Section = posed.section({
  open: {
    transition: { ease: "easeInOut", duration: 1400 },
    x: 0,
    delayChildren: 0,
    staggerChildren: 200,
    opacity: 1,
    delay: 0
  },
  closed: {
    x: 10,
    delay: 0,
    opacity: 0
  }
});

// animations
const Div = posed.div({
  open: {
    transition: { ease: "easeOut", duration: 1400 },
    y: 0,
    opacity: 1,
    x: 0
  },
  closed: { y: 0, opacity: 0, x: 20 }
});

const H1 = posed.h1({
  open: {
    transition: { ease: "easeOut", duration: 2000 },
    y: 0,
    opacity: 1,
    x: 0
  },
  closed: { y: 0, opacity: 0, x: 30 }
});

const P = posed.p({
  open: {
    transition: { ease: "easeOut", duration: 2000 },
    y: 0,
    opacity: 1,
    x: 0
  },
  closed: { y: 0, opacity: 0, x: 0 }
});

const Footer = posed.footer({
  open: {
    transition: { ease: "easeOut", duration: 1000 },
    y: 0,
    opacity: 1,
    x: 0
  },
  closed: { y: 0, opacity: 0, x: 40 }
});

const ButtonWrap = posed.div({
  open: {
    transition: { ease: "easeOut", duration: 1500 },
    y: 0,
    opacity: 1,
    x: 0
  },
  closed: { y: 0, opacity: 0, x: 400 }
});

class LandingPage extends PureComponent {
  constructor(props, context) {
    super(props, context);
    this.state = {
      show: false,
      open: false
    };
    this.handleShow = this.handleShow.bind(this);
    this.handleClose = this.handleClose.bind(this);
  }

  // cdm for animation
  componentDidMount() {
    this.setState({ isOpen: true });
  }

  // show and close modal
  handleClose() {
    this.setState({ show: false });
  }

  handleShow() {
    this.setState({ show: true });
  }

  // render page
  render() {
    const { isOpen } = this.state;
    return (
      <>
        <Section pose={isOpen ? "open" : "closed"} className="bg-light">
          <div className="container">
            <div className="row">
              {/* illustration */}
              <div className="col-lg-8  order-first text-center order-md-1">
                <Div>
                  <img
                    src="/images/illustrations/medicine.svg"
                    alt="Illustration calme et apaisante de deux docteurs dans un hopital"
                    className="img-fluid"
                  />
                </Div>
              </div>
              {/* speech and CTA */}
              <div className="col-lg-4 py-4 pr-0 pb-0">
                <H1 className="display-3 pt-4 text-muted d-none d-sm-block d-sm-none">
                  <span className="text-primary font-weight-bold">Med</span>
                  <span className="text-muted font-weight-light">Direct</span>
                </H1>

                <H1 className="h1 pt-4 text-left d-md-none  d-lg-none d-xl-none d-lg-block">
                  <span className="text-primary font-weight-bold">Med</span>
                  <span className="text-muted font-weight-light">Direct</span>
                </H1>
                <P className="lead mb-3">
                  MedDirect vous aide a trouver les meilleurs soins
                  d&#39;urgence adaptés à vos besoins.
                </P>
                <P className="text-muted d-none d-sm-block d-sm-none">
                  Estimez les temps d&#39;attente dans les centres de soins à
                  proximité et trouvez des alternatives sans attendre!
                </P>
                <ButtonWrap>
                  <Button
                    variant="primary"
                    size="lg"
                    className="mt-3"
                    onClick={this.handleShow}
                  >
                    Commencer
                  </Button>
                </ButtonWrap>
              </div>
            </div>
          </div>
          <Footer className="bg-light">
            <div className="container">
              <div className="row p-5">
                <p className="small text-muted pl-3 pb-5 pt-5 mt-4">
                  Fait avec amour par C. Bailey, C. Begue, T. Lesage, S.
                  Bouaroua, et R. Veil.
                </p>
              </div>
            </div>
          </Footer>
        </Section>
        <SpeedDial />

        <Modal centered show={this.state.show} onHide={this.handleClose}>
          <Modal.Header>
            <Modal.Title>
              {" "}
              Urgence vitale?{" "}
              <a
                href="#collapse"
                className="font-weight-bold"
                data-toggle="collapse"
              >
                <i className="fas fa-info-circle" />
              </a>
              <div id="collapse" className="collapse">
                <ul>
                  <li className="font-weight-normal h6">
                    Une perte de connaissance
                  </li>
                  <li className="font-weight-normal h6">
                    Des troubles neurologiques (paralysie d’un membre, ou
                    soudaine faiblesse musculaire, troubles de la parole ou de
                    la vision)
                  </li>
                  <li className="font-weight-normal h6">
                    Des douleurs thoraciques ou violentes douleurs d’apparition
                    brutale
                  </li>
                  <li className="font-weight-normal h6">
                    Des difficultés respiratoires (étouffe, suffoque) :
                    respiration rapide, bruyante
                  </li>
                  <li className="font-weight-normal h6">
                    Un saignement important
                  </li>
                  <li className="font-weight-normal h6">
                    Un violent traumatisme (accident, plaie)
                  </li>
                  <li className="font-weight-normal h6">
                    Une brûlure de la face ou étendue
                  </li>
                </ul>
              </div>
            </Modal.Title>
          </Modal.Header>

          <Modal.Body>
            <p>
              Si vous pensez être dans une
              <a
                href="#collapse"
                className="font-weight-bold"
                data-toggle="collapse"
              >
                {" "}
                urgence vitale{" "}
              </a>
              , appellez le SAMU, sinon merci de <b>cliquer sur Continuer.</b>
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
      </>
    );
  }
}

export default LandingPage;
