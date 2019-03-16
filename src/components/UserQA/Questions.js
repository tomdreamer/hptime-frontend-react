import React, { Component } from "react";

// importing form wizard, step counter, actual steps and speed dial to reach SAMU
import StepWizard from "react-step-wizard";
import QuestionsIndicator from "./QuestionsIndicator";
import Age from "./Age";
import MedicalSpecialtiesList from "./MedicalSpecialtiesList";
import CurrentLocation from "./CurrentLocation.js";
import SpeedDial from "../SpeedDial";

class Questions extends Component {
  constructor(props) {
    super(props);
    this.state = {
      // TODO hardcoded to refactor counting steps
      numberOfSteps: 3,
      currentStep: 0
    };
  }

  updateFormIndicator(numberOfSteps, currentStep) {
    this.setState({
      numberOfSteps,
      currentStep
    });
  }
  render() {
    const { numberOfSteps, currentStep } = this.state;
    return (
      <>
        <section className="d-flex justify-content-center">
          <QuestionsIndicator
            numberOfSteps={numberOfSteps}
            currentStep={currentStep}
          />
        </section>

        <StepWizard onStepChange={this.handleStep} initialStep={1}>
          <Age
            // adding anchor to url
            hashKey={"age"}
            // update user search filters and form step counter
            updatePatient={event => this.props.updatePatient(event)}
            onFormStep={(numberOfSteps, currentStep) =>
              this.updateFormIndicator(numberOfSteps, currentStep)
            }
          />

          <MedicalSpecialtiesList
            hashKey={"service"}
            updatePatient={event => this.props.updatePatient(event)}
            onFormStep={(numberOfSteps, currentStep) =>
              this.updateFormIndicator(numberOfSteps, currentStep)
            }
          />

          <CurrentLocation
            hashKey={"position"}
            onGeolocation={this.props.onGeolocation}
          />
        </StepWizard>
        <SpeedDial />
      </>
    );
  }
}

export default Questions;
