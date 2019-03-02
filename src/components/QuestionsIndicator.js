import React, { Component } from "react";
import "./QuestionsIndicator.scss";

class Questions extends Component {
  constructor(props) {
    super(props);
    this.state = {
      numberOfSteps: [],
      currentStep: 2
    };
  }

  // count number of items (TODO REFACTOR and QA)
  componentDidMount() {
    var indents = [];
    for (var i = 0; i < this.props.numberOfSteps; i++) {
      indents.push("");
    }

    this.setState({ numberOfSteps: indents });
    this.makeStep();
  }

  makeStep() {
    let dots = [];
    for (var i = 0; i < this.props.numberOfSteps; i++) {
      if (i === this.props.currentStep) {
        dots.push("<span key={index} className='dot active'>");
      } else {
        dots.push("<span key={index} className='dot'>");
      }
    }
    console.log(dots);
    return dots;
  }

  render() {
    const { numberOfSteps, currentStep } = this.state;
    return (
      <div className="counter">
        {numberOfSteps.map((step, index) => {
          console.log(index, currentStep);
          if (index === currentStep) {
            return (
              <span key={index} className="dot active">
                •
              </span>
            );
          } else {
            return (
              <span key={index} className="dot">
                •
              </span>
            );
          }
        })}
      </div>
    );
  }
}

export default Questions;
