import React, { Component } from "react";
import "./QuestionsIndicator.scss";

// TODO refactor into clickable
function renderDots(dots, currentActiveDot) {
  // number to array to be able to use map()
  let pills = Array.apply(null, { length: dots }).map((dot, index) => (
    <span
      key={index}
      // determine if dot must be set to .active class
      className={
        index === currentActiveDot
          ? " questions-counter-dot active"
          : "questions-counter-dot"
      }
    >
      •
    </span>
  ));
  return pills;
}
class Questions extends Component {
  render() {
    const { numberOfSteps, currentStep } = this.props;
    return <section>{renderDots(numberOfSteps, currentStep)}</section>;
  }
}

export default Questions;
