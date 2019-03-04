import React, { Component } from "react";

// content
import StepWizard from "react-step-wizard";
import PathologyQuestions from "./PathologyQuestions";
import AdultQuestion from "./AdultQuestion";
import QuestionsIndicator from "./QuestionsIndicator";

// layout modules
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import UserLocalisation from "./UserLocalisation.js";
import MapWrapper from "./MapWrapper";

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
      <Row>
        <Col xs={12}>
          <div className="d-flex justify-content-center">
            <QuestionsIndicator
              numberOfSteps={numberOfSteps}
              currentStep={currentStep}
            />
          </div>
        </Col>

        <Col xs={12}>
          <StepWizard isHashEnabled={true} initialStep={1}>
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
            <MapWrapper />
          </StepWizard>
        </Col>
      </Row>
    );
  }
}

export default Questions;
