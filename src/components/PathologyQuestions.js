import React, { Component } from "react";
// import Button from "react-bootstrap/Button";
import SpecialtyCard from "./SpecialtyCard";

import dent from "../images/Pictos/Dentaire.svg";
import uterus from "../images/Pictos/Gynéco.svg";
import main from "../images/Pictos/Plaie de main.svg";
// import oreille from "../images/Pictos/ORL_1.svg";
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
        image: oeil,
        infoTitle: "",
        infoText:
          "Le Lorem Ipsum est simplement du faux texte employé dans la composition et la mise en page avant impression. Le Lorem Ipsum est le faux texte standard de l'imprimerie depuis les années 1500, quand un imprimeur anonyme assembla ensemble des morceaux de texte pour réaliser un livre spécimen de polices de texte. Il n'a pas fait que survivre cinq siècles, mais s'est aussi adapté à la bureautique informatique, sans que son contenu n'en soit modifié. Il a été popularisé dans les années 1960 grâce à la vente de feuilles Letraset contenant des passages du Lorem Ipsum, et, plus récemment, par son inclusion dans des applications de mise en page de texte, comme Aldus PageMaker."
      },
      {
        bodyPart: "Dents",
        neededSpecialist: "dentist",
        image: dent,
        infoTitle: "",
        infoText:
          "Le Lorem Ipsum est simplement du faux texte employé dans la composition et la mise en page avant impression. Le Lorem Ipsum est le faux texte standard de l'imprimerie depuis les années 1500, quand un imprimeur anonyme assembla ensemble des morceaux de texte pour réaliser un livre spécimen de polices de texte. Il n'a pas fait que survivre cinq siècles, mais s'est aussi adapté à la bureautique informatique, sans que son contenu n'en soit modifié. Il a été popularisé dans les années 1960 grâce à la vente de feuilles Letraset contenant des passages du Lorem Ipsum, et, plus récemment, par son inclusion dans des applications de mise en page de texte, comme Aldus PageMaker."
      },
      {
        bodyPart: "Anus",
        neededSpecialist: "Proctology",
        image: dent,
        infoTitle: "",
        infoText:
          "Le Lorem Ipsum est simplement du faux texte employé dans la composition et la mise en page avant impression. Le Lorem Ipsum est le faux texte standard de l'imprimerie depuis les années 1500, quand un imprimeur anonyme assembla ensemble des morceaux de texte pour réaliser un livre spécimen de polices de texte. Il n'a pas fait que survivre cinq siècles, mais s'est aussi adapté à la bureautique informatique, sans que son contenu n'en soit modifié. Il a été popularisé dans les années 1960 grâce à la vente de feuilles Letraset contenant des passages du Lorem Ipsum, et, plus récemment, par son inclusion dans des applications de mise en page de texte, comme Aldus PageMaker."
      },
      {
        bodyPart: "Main (plaie ouverte)",
        neededSpecialist: "handWounds",
        image: main,
        infoTitle: "",
        infoText:
          "Le Lorem Ipsum est simplement du faux texte employé dans la composition et la mise en page avant impression. Le Lorem Ipsum est le faux texte standard de l'imprimerie depuis les années 1500, quand un imprimeur anonyme assembla ensemble des morceaux de texte pour réaliser un livre spécimen de polices de texte. Il n'a pas fait que survivre cinq siècles, mais s'est aussi adapté à la bureautique informatique, sans que son contenu n'en soit modifié. Il a été popularisé dans les années 1960 grâce à la vente de feuilles Letraset contenant des passages du Lorem Ipsum, et, plus récemment, par son inclusion dans des applications de mise en page de texte, comme Aldus PageMaker."
      },
      {
        bodyPart: "Psychiatrie",
        neededSpecialist: "handWounds",
        image: dent,
        infoTitle: "",
        infoText:
          "Le Lorem Ipsum est simplement du faux texte employé dans la composition et la mise en page avant impression. Le Lorem Ipsum est le faux texte standard de l'imprimerie depuis les années 1500, quand un imprimeur anonyme assembla ensemble des morceaux de texte pour réaliser un livre spécimen de polices de texte. Il n'a pas fait que survivre cinq siècles, mais s'est aussi adapté à la bureautique informatique, sans que son contenu n'en soit modifié. Il a été popularisé dans les années 1960 grâce à la vente de feuilles Letraset contenant des passages du Lorem Ipsum, et, plus récemment, par son inclusion dans des applications de mise en page de texte, comme Aldus PageMaker."
      },
      {
        bodyPart: "Oreille",
        neededSpecialist: "ENT",
        image: orl,
        infoTitle: "",
        infoText:
          "Le Lorem Ipsum est simplement du faux texte employé dans la composition et la mise en page avant impression. Le Lorem Ipsum est le faux texte standard de l'imprimerie depuis les années 1500, quand un imprimeur anonyme assembla ensemble des morceaux de texte pour réaliser un livre spécimen de polices de texte. Il n'a pas fait que survivre cinq siècles, mais s'est aussi adapté à la bureautique informatique, sans que son contenu n'en soit modifié. Il a été popularisé dans les années 1960 grâce à la vente de feuilles Letraset contenant des passages du Lorem Ipsum, et, plus récemment, par son inclusion dans des applications de mise en page de texte, comme Aldus PageMaker."
      },
      {
        bodyPart: "Gorge",
        neededSpecialist: "ENT",
        image: orl,
        infoTitle: "",
        infoText:
          "Le Lorem Ipsum est simplement du faux texte employé dans la composition et la mise en page avant impression. Le Lorem Ipsum est le faux texte standard de l'imprimerie depuis les années 1500, quand un imprimeur anonyme assembla ensemble des morceaux de texte pour réaliser un livre spécimen de polices de texte. Il n'a pas fait que survivre cinq siècles, mais s'est aussi adapté à la bureautique informatique, sans que son contenu n'en soit modifié. Il a été popularisé dans les années 1960 grâce à la vente de feuilles Letraset contenant des passages du Lorem Ipsum, et, plus récemment, par son inclusion dans des applications de mise en page de texte, comme Aldus PageMaker."
      },
      {
        bodyPart: "Gynécologie, Grossesse",
        neededSpecialist: "ENT",
        image: uterus,
        infoTitle: "",
        infoText:
          "Le Lorem Ipsum est simplement du faux texte employé dans la composition et la mise en page avant impression. Le Lorem Ipsum est le faux texte standard de l'imprimerie depuis les années 1500, quand un imprimeur anonyme assembla ensemble des morceaux de texte pour réaliser un livre spécimen de polices de texte. Il n'a pas fait que survivre cinq siècles, mais s'est aussi adapté à la bureautique informatique, sans que son contenu n'en soit modifié. Il a été popularisé dans les années 1960 grâce à la vente de feuilles Letraset contenant des passages du Lorem Ipsum, et, plus récemment, par son inclusion dans des applications de mise en page de texte, comme Aldus PageMaker."
      },
      {
        bodyPart: "Autres",
        neededSpecialist: "generalist",
        image: dent,
        infoTitle: "",
        infoText:
          "Le Lorem Ipsum est simplement du faux texte employé dans la composition et la mise en page avant impression. Le Lorem Ipsum est le faux texte standard de l'imprimerie depuis les années 1500, quand un imprimeur anonyme assembla ensemble des morceaux de texte pour réaliser un livre spécimen de polices de texte. Il n'a pas fait que survivre cinq siècles, mais s'est aussi adapté à la bureautique informatique, sans que son contenu n'en soit modifié. Il a été popularisé dans les années 1960 grâce à la vente de feuilles Letraset contenant des passages du Lorem Ipsum, et, plus récemment, par son inclusion dans des applications de mise en page de texte, comme Aldus PageMaker."
      }
    ];
    return (
      <section className="PathologyQuestions container ">
        <h3>Ou le patient à t'il mal ?</h3>

        {specialtyList.map(oneSpecialty => {
          return (
            <SpecialtyCard
              bodyPart={oneSpecialty.bodyPart}
              picture={oneSpecialty.image}
              neededSpecialist={oneSpecialty.neededSpecialist}
              updatePatient={event => this.props.updatePatient(event)}
              infoText={oneSpecialty.infoText}
              nextStep={event => this.props.nextStep(event)}
            />
          );
        })}
      </section>
    );
  }
}

export default PathologyQuestions;
