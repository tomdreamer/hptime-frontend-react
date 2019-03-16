import React, { Component } from "react";
import { Link } from "react-router-dom";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";
import posed from "react-pose";

// child card component to create a list of cards
import MedicalSpecialtyCard from "./MedicalSpecialtyCard";

// images
const generale = "/images/pictos/medical.svg";
const oeil = "/images/pictos/ophtalmologie.svg";
const orl = "/images/pictos/ORL2.png";
const dent = "/images/pictos/dentaire.svg";
const main = "/images/pictos/plaie_de_main.svg";
const uterus = "/images/pictos/gynecologie.svg";
const anus = "/images/pictos/anus.svg";
const psychiatrie = "/images/pictos/psychiatrie.svg";

// animations
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

class MedicalSpecialtiesList extends Component {
  constructor(props) {
    super(props);
    this.state = { isOpen: false };
  }

  // update user selected speciality filter on click
  clickHandler(event) {
    this.props.updatePatient(event);
  }

  // go to next step and lift current step counter to form step counter
  userChoice(event) {
    this.props.nextStep(event);
    this.props.onFormStep(this.props.totalSteps, this.props.currentStep);
  }

  // check if card information is open to show additional informations on each specialities
  componentDidUpdate(oldProps) {
    if (!oldProps.isActive && this.props.isActive) {
      this.setState({ isOpen: true });
    }
  }

  // render a list of cards  for each medical specialities
  render() {
    const { isOpen } = this.state;

    // bodypart is the button name, neededSpecialist the filter selector, TODO refactor as API request
    const specialitiesList = [
      {
        bodyPart: "Medecine générale",
        neededSpecialist: "Générales",
        image: generale,
        additionalInformation: "Pour tout besoin médical."
      },
      {
        bodyPart: "Problème à l'oeil",
        neededSpecialist: "Ophtalmologiques",
        image: oeil,
        additionalInformation:
          "Il s'agit d'un trouble de la vision ou d'un autre problème à l'oeil ou à la paupiere."
      },
      {
        bodyPart: "Trouble oto-rhino-laryngologique",
        neededSpecialist: "Oto-rhino-laryngologiques",
        image: orl,
        additionalInformation:
          "Il s'agit d'un problème à l'oreille, au nez, ou dans la gorge."
      },
      {
        bodyPart: "Problème dentaire",
        neededSpecialist: "Dentaires",
        image: dent,
        additionalInformation: "Pour toute douleur à la dent ou aux gencives. "
      },

      {
        bodyPart: "Plaie à la main ",
        neededSpecialist: "Plaies de la main",
        image: main,
        additionalInformation:
          "Il s'agit d'une plaie à la main ou sur un ou plusieurs doigts."
      },

      {
        bodyPart: "Gynécologie-obstetrique",
        neededSpecialist: "Gynéco-obstétricales",
        image: uterus,
        additionalInformation:
          "Il s'agit d'un problème gynécologique ou lié à une grossesse en cours ou suspectée."
      },

      {
        bodyPart: "Problème au rectum",
        neededSpecialist: "Proctology",
        image: anus,
        additionalInformation:
          "Il s'agit d'un problème identifié au niveau de l'anus ou du rectum."
      },
      {
        bodyPart: "Psychiatrie",
        neededSpecialist: "Psychiatriques",
        image: psychiatrie,
        additionalInformation:
          "Il s'agit d'un probleme d'ordre psychologique ou psychiatrique."
      }
    ];
    return (
      <Container id="medical-specialities-list">
        {/* question */}
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
                  <p className="lead text-center w-100 my-3">
                    Quel est le problème?
                  </p>
                </Row>
                <Row>
                  <span className="text-center px-2 my-3 text-muted">
                    Certains problèmes necessitent une attention particulière,
                    si le vôtre n&#39;en fait pas partie, merci de choisir la
                    médecine générale.
                  </span>
                </Row>
              </div>
              {specialitiesList.map((specialityItem, index) => {
                return (
                  <Li key={index} className="item">
                    <MedicalSpecialtyCard
                      // card specs
                      bodyPart={specialityItem.bodyPart}
                      picture={specialityItem.image}
                      neededSpecialist={specialityItem.neededSpecialist}
                      additionalInformation={
                        specialityItem.additionalInformation
                      }
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

export default MedicalSpecialtiesList;
