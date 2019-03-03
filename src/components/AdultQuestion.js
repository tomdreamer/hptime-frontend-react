import React, { Component } from "react";
import Button from "react-bootstrap/Button";

class AdultQuestion extends Component {
  clickHandler(event) {
    this.props.nextStep();
    this.props.updatePatient(event);
    this.props.onFormStep(this.props.totalSteps, this.props.currentStep);
  }
  render() {
    return (
      <section className="text-center">
        <p className="lead">Le patient à t&#39;il plus de 16 ans ?</p>
        <hr className="mb-2" />
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
