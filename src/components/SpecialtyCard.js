import React, { Component } from "react";
// import posed, { PoseGroup } from "react-pose";
import Button from "react-bootstrap/Button";
import "./SpecialtyCard.scss";
// left image card template https://www.codeply.com/go/l1KAQtjjbA

// const Card = posed.div({
//   enter: {
//     y: 0,
//     opacity: 1,
//     delay: 300,
//     transition: {
//       y: { type: "spring", stiffness: 1000, damping: 100 },
//       default: { duration: 300 }
//     }
//   },
//   exit: {
//     y: 50,
//     opacity: 0,
//     transition: { duration: 150 }
//   }
// });

class SpecialtyCard extends Component {
  constructor(props) {
    super(props);
    this.state = { isVisible: false };
  }

  componentDidMount() {
    this.setState({
      isVisible: !this.state.isVisible
    });
  }

  clickHandler(event) {
    this.props.updatePatient(event);
    this.props.nextStep();
  }
  render() {
    return (
      // <PoseGroup>
      <div
        className="card flex-row m-3 bg-light rounded "
        key={this.props.index}
      >
        <div className="card-header bg-primary p-2 m-0 d-flex flex-wrap align-items-center  customOrangeUgly border-0">
          <img
            src={this.props.picture}
            alt={this.props.bodyPart}
            className="picto  d-block mx-auto"
          />
        </div>
        <div className="w-100 px-2 d-flex flex-column justify-content-between">
          <div className="card-title px-2 text-primary font-weight-normal">
            <h4 className="font-weight-normal">{this.props.bodyPart}</h4>
          </div>

          <div className="card-block p-2 pl-2 d-flex justify-content-end">
            {/* <p className="card-text">{this.props.infoText}</p> */}
            <Button
              variant="outline-dark mr-2"
              onClick={event => this.clickHandler(event)}
            >
              <i className="far fa-question-circle" />
            </Button>
            <Button
              className="w-50 text-white"
              variant="primary"
              onClick={event => this.clickHandler(event)}
              name="neededSpecialist"
              value={this.props.neededSpecialist}
            >
              Valider
            </Button>
          </div>
        </div>
      </div>
      // </PoseGroup>
    );
  }
}

export default SpecialtyCard;
