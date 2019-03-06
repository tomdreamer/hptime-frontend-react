import React, { Component } from "react";
import Button from "react-bootstrap/Button";
import "./AdultQuestion.scss";

class AdultQuestion extends Component {
  clickHandler(event) {
    this.props.nextStep();
    this.props.updatePatient(event);
    this.props.onFormStep(this.props.totalSteps, this.props.currentStep);
  }
  render() {
    return (
      <section className="text-center">
        <div className="bg-toy" />
        <p className="lead my-4">Le patient à t&#39;il plus de 16 ans ?</p>

        <Button
          variant="primary"
          onClick={event => this.clickHandler(event)}
          name="patientAdult"
          value="Enfants"
        >
          Enfant
        </Button>

        <Button
          variant="secondary"
          onClick={event => this.clickHandler(event)}
          name="patientAdult"
          value="Adultes"
          className="mx-3"
        >
          Adulte
        </Button>
      </section>
    );
  }
}

export default AdultQuestion;
