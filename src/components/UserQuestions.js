import React, { Component } from "react";
import Button from "react-bootstrap/Button";
import "./UserQuestions.scss";

class UserQuestions extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  clickHandler(event) {
    this.props.nextStep();
    this.props.updatePatient(event);
  }
  render() {
    return (
      <section className="UserQuestions container text-center">
        <div className="row ">
          <h4>Quel est le genre du patient ?</h4>{" "}
        </div>
        <div className="row ">
          <div className="col">
            <Button
              variant="primary"
              size="lg"
              onClick={event => this.clickHandler(event)}
              name="patientGender"
              value="male"
            >
              Homme
            </Button>
          </div>

          <div className="col">
            <Button
              variant="primary"
              size="lg"
              onClick={event => this.clickHandler(event)}
              name="patientGender"
              value="female"
            >
              Femme
            </Button>
          </div>
        </div>
      </section>
    );
  }
}

export default UserQuestions;
