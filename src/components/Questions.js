import React, { Component } from "react";
// import UserQuestions from "./UserQuestions";
import PathologyQuestions from "./PathologyQuestions";
import AdultQuestion from "./AdultQuestion";
import StepWizard from "react-step-wizard";
import UserLocalisation from "./UserLocalisation.js";
class Questions extends Component {
  render() {
    return (
      <StepWizard>
        <AdultQuestion
          updatePatient={event => this.props.updatePatient(event)}
        />

        <PathologyQuestions
          updatePatient={event => this.props.updatePatient(event)}
        />
        <UserLocalisation />
      </StepWizard>
    );
  }
}

export default Questions;
