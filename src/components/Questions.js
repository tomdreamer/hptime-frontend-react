import React, { Component } from "react";

// content
import StepWizard from "react-step-wizard";
import PathologyQuestions from "./PathologyQuestions";
import AdultQuestion from "./AdultQuestion";
import QuestionsIndicator from "./QuestionsIndicator";
import UserLocalisation from "./UserLocalisation.js";

class Questions extends Component {
  constructor(props) {
    super(props);
    this.state = {
      // works, hardcoded to refactor later
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
          <AdultQuestion
            // adding anchor to url
            hashKey={"age"}
            // update user search filters and form step counter
            updatePatient={event => this.props.updatePatient(event)}
            onFormStep={(numberOfSteps, currentStep) =>
              this.updateFormIndicator(numberOfSteps, currentStep)
            }
          />

          <PathologyQuestions
            hashKey={"service"}
            updatePatient={event => this.props.updatePatient(event)}
            onFormStep={(numberOfSteps, currentStep) =>
              this.updateFormIndicator(numberOfSteps, currentStep)
            }
          />

          <UserLocalisation
            hashKey={"position"}
            onGeolocation={this.props.onGeolocation}
          />
        </StepWizard>
      </>
    );
  }
}

export default Questions;
