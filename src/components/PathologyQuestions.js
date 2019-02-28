import React, { Component } from "react";
import Button from "react-bootstrap/Button";
import SpecialtyCard from "./SpecialtyCard";

import dent from "../images/Pictos/Dentaire.svg";
import uterus from "../images/Pictos/Gynéco.png";
import main from "../images/Pictos/Plaie de main.svg";
import oreille from "../images/Pictos/ORL_1.svg";
import oeil from "../images/Pictos/Ophtalmo.svg";
import orl from "../images/Pictos/ORL_1.svg";

class PathologyQuestions extends Component {
  state = {};
  clickHandler(event) {
    this.props.updatePatient(event);
  }

  render() {
    const specialtyList = [
      {
        bodyPart: "Oeil",
        neededSpecialist: "ophthalmology",
        image: oeil
      },
      {
        bodyPart: "Dents",
        neededSpecialist: "dentist",
        image: dent
      },
      {
        bodyPart: "Anus",
        neededSpecialist: "Proctology",
        image: dent
      },
      {
        bodyPart: "Main (plaie ouverte)",
        neededSpecialist: "handWounds",
        image: main
      },
      {
        bodyPart: "Psychiatrie",
        neededSpecialist: "handWounds",
        image: dent
      },
      {
        bodyPart: "Oreille",
        neededSpecialist: "ENT",
        image: orl
      },
      {
        bodyPart: "Gorge",
        neededSpecialist: "ENT",
        image: orl
      },
      {
        bodyPart: "Gynécologie, Grossesse",
        neededSpecialist: "ENT",
        image: uterus
      },
      {
        bodyPart: "Autres",
        neededSpecialist: "generalist",
        image: dent
      }
    ];
    return (
      <section className="PathologyQuestions container ">
        <h3>Ou le patient à t'il mal ?</h3>
        {/* <div className="specialtyContainer"> */}
        {specialtyList.map(oneSpecialty => {
          return (
            <SpecialtyCard
              bodyPart={oneSpecialty.bodyPart}
              picture={oneSpecialty.image}
              neededSpecialist={oneSpecialty.neededSpecialist}
              updatePatient={event => this.props.updatePatient(event)}
            />
          );
        })}
        {/* </div> */}
      </section>
    );
  }
}

export default PathologyQuestions;
