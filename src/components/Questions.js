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
import "./Questions.scss";

class Questions extends Component {
  constructor(props) {
    super(props);
    this.state = {
      numberOfSteps: ["3", "", ""],
      currentStep: 1
    };
  }
  render() {
    const { numberOfSteps, currentStep } = this.state;
    return (
      <Row>
        <Col sm={12} md={12} lg={12}>
          <div className="d-flex justify-content-center">
            <QuestionsIndicator
              numberOfSteps={numberOfSteps}
              currentStep={currentStep}
            />
          </div>
        </Col>

        <Col sm={12} md={12} lg={12}>
          <StepWizard isHashEnabled={true} initialStep={1}>
            <AdultQuestion
              hashKey={"age"}
              updatePatient={event => this.props.updatePatient(event)}
            />

            <PathologyQuestions
              hashKey={"service"}
              updatePatient={event => this.props.updatePatient(event)}
            />

            <UserLocalisation
              hashKey={"position"}
              onGeolocation={this.props.onGeolocation}
            />
          </StepWizard>
        </Col>
      </Row>
    );
  }
}

export default Questions;
