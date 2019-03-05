import React, { Component } from "react";
// child card component
import SpecialtyCard from "./SpecialtyCard";
// images
import generale from "../images/Pictos/medical.svg";
import dent from "../images/Pictos/dentaire.svg";
import uterus from "../images/Pictos/gynecologie.svg";
import main from "../images/Pictos/plaie_de_main.svg";
import oeil from "../images/Pictos/ophtalmologie.svg";
import orl from "../images/Pictos/ORL.png";
import anus from "../images/Pictos/anus.svg";
import psychiatrie from "../images/Pictos/psychiatrie.svg";
import gorge from "../images/Pictos/gorge.svg";

class PathologyQuestions extends Component {
  // update user search filters
  clickHandler(event) {
    this.props.updatePatient(event);
  }

  // show next step and lift choice up to form step counter
  userChoice(event) {
    this.props.nextStep(event);
    this.props.onFormStep(this.props.totalSteps, this.props.currentStep);
  }

  // card list of specialities that helps to filter search results of hospitals and structures with corresponding services
  render() {
    const specialtyList = [
      {
        bodyPart: "ORL",
        neededSpecialist: "Oto-rhino-laryngologiques",
        image: orl,
        infoTitle: "",
        infoText: "Le Lorem Ipsum est simplement du faux texte employé dans."
      },
      {
        bodyPart: "Oeil",
        neededSpecialist: "Ophtalmologiques",
        image: oeil,
        infoTitle: "",
        infoText:
          "Le Lorem Ipsum est simplement du faux texte employé dans la composition et la mise en page avant impression. "
      },
      {
        bodyPart: "Main (plaie ouverte)",
        neededSpecialist: "Plaies de la main",
        image: main,
        infoTitle: "",
        infoText: "Le Lorem Ipsum est simplement du faux texte employé dans."
      },
      {
        bodyPart: "Gynécologie, Grossesse",
        neededSpecialist: "Gynéco-obstétricales",
        image: uterus,
        infoTitle: "",
        infoText: "Le Lorem Ipsum est simplement du faux texte employé dans."
      },
      {
        bodyPart: "Psychiatrie",
        neededSpecialist: "Psychiatriques",
        image: psychiatrie,
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
        bodyPart: "Anus",
        neededSpecialist: "Proctology",
        image: anus,
        infoTitle: "",
        infoText:
          "La proctologie. Lorem Ipsum est simplement du faux texte employé dans la composition"
      },
      {
        bodyPart: "Problème à la gorge",
        neededSpecialist: "Oto-rhino-laryngologiques",
        image: gorge,
        infoTitle: "",
        infoText: "Le Lorem Ipsum est simplement du faux texte employé dans."
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
        <p className="lead bg-primary text-center font-weight-bold text-white py-2">
          Où se situe la douleur ?
        </p>
        {/* <hr className="mb-5" /> */}
        <ul className="list-unstyled">
          {specialtyList.map((oneSpecialty, index) => {
            return (
              <li key={index} className="item">
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
              </li>
            );
          })}
        </ul>
      </section>
    );
  }
}

export default PathologyQuestions;
