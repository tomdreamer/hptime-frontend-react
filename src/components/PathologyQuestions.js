import React, { Component } from "react";
import posed, { PoseGroup } from "react-pose";
import { Link } from "react-router-dom";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

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
const ventre = "/images/pictos/ventre.svg";
const torso = "/images/pictos/torso.svg";
const brulure = "/images/pictos/brulure.svg";
const fracture = "/images/pictos/fracture.svg";
const gorge = "/images/pictos/gorge.svg";
const grossesse = "/images/pictos/grossesse.svg";

const Ul = posed.ul({
  open: {
    transition: { ease: "easeInOut", duration: 300 },
    x: 0,
    delayChildren: 100,
    staggerChildren: 120,
    opacity: 1,
    delay: 300
  },
  closed: { x: 20, delay: 300, opacity: 0 }
});

const Li = posed.li({
  open: {
    transition: { ease: "easeInOut", duration: 400 },
    y: 0,
    opacity: 1,
    x: 0
  },
  closed: { y: 0, opacity: 0, x: 300 }
});

// function pathologyAnimation() {
//   if (this.props.pathologyAnimate === true) {
//     setTimeout(this.toggle, 1000);
//   }
// }

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
  componentWillMount() {
    setTimeout(console.log("coucou pathos mount"), 500);
  }

  componentDidUpdate(oldProps) {
    if (!oldProps.isActive && this.props.isActive) {
      console.log("coucou pathos-----------------");
      this.setState({ isOpen: true });
    }
  }

  // card list of specialities that helps to filter search results of hospitals and structures with corresponding services
  render() {
    const { isOpen } = this.state;

    const specialtyList = [
      {
        bodyPart: "Oeil",
        neededSpecialist: "Ophtalmologiques",
        image: oeil,
        infoTitle: "",
        infoText:
          "Le Lorem Ipsum est simplement du faux texte employé dans la composition et la mise en page avant impression. "
      },
      {
        bodyPart: "ORL",
        neededSpecialist: "Oto-rhino-laryngologiques",
        image: orl,
        infoTitle: "",
        infoText: "Le Lorem Ipsum est simplement du faux texte employé dans."
      },
      {
        bodyPart: "Dents",
        neededSpecialist: "Dentaires",
        image: dent,
        infoTitle: "",
        infoText:
          "Le Lorem Ipsum est simplement du faux texte employé dans la composition et la mise en page avant impression. "
      },
      {
        bodyPart: "Problème à la gorge",
        neededSpecialist: "Oto-rhino-laryngologiques",
        image: gorge,
        infoTitle: "",
        infoText: "Le Lorem Ipsum est simplement du faux texte employé dans."
      },
      {
        bodyPart: "Main (plaie ouverte)",
        neededSpecialist: "Plaies de la main",
        image: main,
        infoTitle: "",
        infoText: "Le Lorem Ipsum est simplement du faux texte employé dans."
      },
      {
        bodyPart: "Poitrine",
        neededSpecialist: "Générales",
        image: torso,
        infoTitle: "",
        infoText:
          "La proctologie. Lorem Ipsum est simplement du faux texte employé dans la composition"
      },
      {
        bodyPart: "Ventre",
        neededSpecialist: "Générales",
        image: ventre,
        infoTitle: "",
        infoText:
          "La proctologie. Lorem Ipsum est simplement du faux texte employé dans la composition"
      },
      {
        bodyPart: "Gynécologie",
        neededSpecialist: "Gynéco-obstétricales",
        image: uterus,
        infoTitle: "",
        infoText: "Le Lorem Ipsum est simplement du faux texte employé dans."
      },
      {
        bodyPart: "Grossesse",
        neededSpecialist: "Gynéco-obstétricales",
        image: grossesse,
        infoTitle: "",
        infoText: "Le Lorem Ipsum est simplement du faux texte employé dans."
      },
      {
        bodyPart: "Côlon",
        neededSpecialist: "Proctology",
        image: anus,
        infoTitle: "",
        infoText:
          "La proctologie. Lorem Ipsum est simplement du faux texte employé dans la composition"
      },
      {
        bodyPart: "Psychiatrie",
        neededSpecialist: "Psychiatriques",
        image: psychiatrie,
        infoTitle: "",
        infoText: "Le Lorem Ipsum est simplement du faux texte employé dans."
      },
      {
        bodyPart: "Brulure (medecine générale)",
        neededSpecialist: "Générales",
        image: brulure,
        infoTitle: "",
        infoText: "Pour tout autre type d'urgence."
      },
      {
        bodyPart: "Fracture (medecine générale)",
        neededSpecialist: "Générales",
        image: fracture,
        infoTitle: "",
        infoText: "Pour tout autre type d'urgence."
      },
      {
        bodyPart: "Medecine générale",
        neededSpecialist: "Générales",
        image: generale,
        infoTitle: "",
        infoText: "Pour tout autre type d'urgence."
      }
    ];
    return (
      <section id="PathologyCards">
        {/* quuestion */}
        <p className="lead text-center">
          <span className="float-left pl-3">
            <Link
              to="#0"
              onClick={this.props.previousStep}
              className="text-secondary"
            >
              <i class="fas fa-arrow-left mx-2" />
              Retour
            </Link>
          </span>
          <span className="text-center mr-4 pr-4">
            Où se situe la douleur ?
          </span>
        </p>

        {/* card list */}
        <Row className="d-flex justify-content-center">
          <Col xs={12} sm={12} md={9} lg={6}>
            <Ul pose={isOpen ? "open" : "closed"} className="list-unstyled">
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
      </section>
    );
  }
}

export default PathologyQuestions;
