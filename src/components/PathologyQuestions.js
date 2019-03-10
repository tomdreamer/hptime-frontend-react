import React, { Component } from "react";
import posed from "react-pose";
import { Link } from "react-router-dom";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";

// child card component
import SpecialtyCard from "./SpecialtyCard";
// images
const generale = "/images/pictos/medical.svg";
const dent = "/images/pictos/dentaire.svg";
const uterus = "/images/pictos/gynecologie.svg";
const main = "/images/pictos/plaie_de_main.svg";
const oeil = "/images/pictos/ophtalmologie.svg";
const orl = "/images/pictos/ORL2.png";
const anus = "/images/pictos/anus.svg";
const psychiatrie = "/images/pictos/psychiatrie.svg";
//const ventre = "/images/pictos/ventre.svg";
//const torso = "/images/pictos/torso.svg";
//const brulure = "/images/pictos/brulure.svg";
//const fracture = "/images/pictos/fracture.svg";
//const gorge = "/images/pictos/gorge.svg";
//const grossesse = "/images/pictos/grossesse.svg";

const Ul = posed.ul({
  open: {
    transition: { ease: "easeOut", duration: 1400 },
    x: 0,
    delayChildren: 0,
    staggerChildren: 300,
    opacity: 1,
    delay: 100
  },
  closed: {
    x: 20,
    delay: 300,
    opacity: 0
  }
});

const Li = posed.li({
  open: {
    transition: { ease: "easeOut", duration: 1000 },
    y: 0,
    opacity: 1,
    x: 0
  },
  closed: { y: 0, opacity: 0, x: 400 }
});

class PathologyQuestions extends Component {
  constructor(props) {
    super(props);
    this.state = { isOpen: false };
  }

  // update user search filters
  clickHandler(event) {
    this.props.updatePatient(event);
  }

  // show next step and lift choice up to form step counter
  userChoice(event) {
    this.props.nextStep(event);
    this.props.onFormStep(this.props.totalSteps, this.props.currentStep);
  }

  componentDidUpdate(oldProps) {
    if (!oldProps.isActive && this.props.isActive) {
      this.setState({ isOpen: true });
    }
  }

  // card list of specialities that helps to filter search results of hospitals and structures with corresponding services
  render() {
    const { isOpen } = this.state;

    const specialtyList = [
      {
        bodyPart: "Medecine générale",
        neededSpecialist: "Générales",
        image: generale,
        infoTitle: "",
        infoText: "Pour tout besoin médical."
      },
      {
        bodyPart: "Problême à l'oeil",
        neededSpecialist: "Ophtalmologiques",
        image: oeil,
        infoTitle: "",
        infoText:
          "Il s'agit d'un trouble de la vision ou d'un autre problème à l'oeil ou à la paupiere."
      },
      {
        bodyPart: "Trouble oto-rhino-laryngologique",
        neededSpecialist: "Oto-rhino-laryngologiques",
        image: orl,
        infoTitle: "",
        infoText:
          "Il s'agit d'un problème à l'oreille, au nez, ou dans la gorge."
      },
      {
        bodyPart: "Problême dentaire",
        neededSpecialist: "Dentaires",
        image: dent,
        infoTitle: "",
        infoText: "Pour toute douleur à la dent ou aux gencives. "
      },

      {
        bodyPart: "Plaie à la main ",
        neededSpecialist: "Plaies de la main",
        image: main,
        infoTitle: "",
        infoText:
          "Il s'agit d'une plaie à la main ou sur un ou plusieurs doigts."
      },

      {
        bodyPart: "Gynécologie-obstetrie",
        neededSpecialist: "Gynéco-obstétricales",
        image: uterus,
        infoTitle: "",
        infoText:
          "Il s'agit d'un problème gynécologique ou lié à une grossesse en cours ou suspectée."
      },

      {
        bodyPart: "Problême au rectum",
        neededSpecialist: "Proctology",
        image: anus,
        infoTitle: "",
        infoText:
          "Il s'agit d'un problème identifié au niveau de l'anus ou du rectum."
      },
      {
        bodyPart: "Psychiatrie",
        neededSpecialist: "Psychiatriques",
        image: psychiatrie,
        infoTitle: "",
        infoText:
          "Il s'agit d'un probleme d'ordre psychologique ou psychiatrique."
      }
    ];
    return (
      <Container id="PathologyCards">
        {/* quuestion */}
        <Row>
          <span className="float-left pl-3">
            <Link
              to="#0"
              onClick={this.props.previousStep}
              className="text-secondary"
            >
              <i className="fas fa-arrow-left mx-2" />
              Retour
            </Link>
          </span>
        </Row>

        {/* card list */}
        <Row className="d-flex justify-content-center">
          <Col xs={12} sm={12} md={9} lg={6}>
            <Ul pose={isOpen ? "open" : "closed"} className="list-unstyled">
              <div>
                <Row>
                  <p className="lead text-center w-100 mb-1">
                    Quel est le problême?
                  </p>
                </Row>
                <Row>
                  <span className="text-center px-4 small">
                    Certains problêmes necessitent une attention particulière,
                    si le vôtre n'en fait pas partie, veuillez choisir médecine
                    générale.
                  </span>
                </Row>
              </div>
              {specialtyList.map((oneSpecialty, index) => {
                return (
                  <Li key={index} className="item">
                    <SpecialtyCard
                      // card specs
                      bodyPart={oneSpecialty.bodyPart}
                      picture={oneSpecialty.image}
                      neededSpecialist={oneSpecialty.neededSpecialist}
                      infoText={oneSpecialty.infoText}
                      index={index}
                      // update filter and next step in form events
                      updatePatient={event => this.props.updatePatient(event)}
                      nextStep={event => this.userChoice(event)}
                    />
                  </Li>
                );
              })}
            </Ul>
          </Col>
        </Row>
      </Container>
    );
  }
}

export default PathologyQuestions;
