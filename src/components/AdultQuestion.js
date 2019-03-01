import React, { Component } from "react";
import Button from "react-bootstrap/Button";

class AdultQuestion extends Component {
  state = {};

  clickHandler(event) {
    this.props.nextStep();
    this.props.updatePatient(event);
  }
  render() {
    return (
      <section className="AdultQuestion container text-center">
        <h4>Le patient à t'il plus de 16 ans ?</h4>
        <div className="row">
          <div className="col">
            <Button
              variant="primary"
              onClick={event => this.clickHandler(event)}
              name="patientAdult"
              value="Adultes"
            >
              Oui
            </Button>
          </div>
          <div className="col">
            <Button
              variant="primary"
              onClick={event => this.clickHandler(event)}
              name="patientAdult"
              value="Enfants"
            >
              Non
            </Button>
          </div>
        </div>
      </section>
    );
  }
}

export default AdultQuestion;
