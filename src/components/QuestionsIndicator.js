import React, { Component } from "react";
import "./QuestionsIndicator.scss";

function renderDots(dots, currentActiveDot) {
  if (dots.length > 0) {
    return dots.map((dot, index) => (
      <span key={index} className="dot active">
        •
      </span>
    ));
  } else return [];
}
class Questions extends Component {
  constructor(props) {
    super(props);
    this.state = {
      numberOfSteps: [],
      currentStep: 2
    };
  }

  render() {
    const { numberOfSteps, currentActiveDot } = this.props;
    const dots = renderDots(numberOfSteps, currentActiveDot);

    return <section>{dots}</section>;
  }
}

export default Questions;
