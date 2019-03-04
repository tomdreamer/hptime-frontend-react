import React, { Component } from "react";
import ReactDOM from "react-dom";
import posed, { PoseGroup } from "react-pose";
import Button from "react-bootstrap/Button";
import "./SpecialtyCard.scss";
// left image card template https://www.codeply.com/go/l1KAQtjjbA

const Card = posed.div({
  // enter: {
  //   y: 0,
  //   x: 0,
  //   opacity: 1,
  //   delay: 20000,
  //   transition: {
  //     y: { type: "decay" },
  //     default: { duration: 300 }
  //   }
  // },
  // exit: {
  //   y: 50,
  //   opacity: 0,
  //   transition: { duration: 150 }
  // }
});

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
      <PoseGroup>
        <Card
          className="card flex-row m-4 bg-light rounded border-secondary p-2"
          key={this.props.index}
        >
          <div className="card-header bg-success p-2 m-0 d-flex flex-wrap align-items-center border-left border-bottom-0 rounded-circle col-5">
            <img
              src={this.props.picture}
              alt={this.props.bodyPart}
              className="picto  d-block mx-auto"
            />
          </div>
          <div className="col-7 p-0 d-flex flex-column justify-content-between">
            <div className="card-title px-2">
              <h6>{this.props.bodyPart}</h6>
            </div>

            <div className="card-block p-2 px-2 d-flex justify-content-end">
              {/* <p className="card-text">{this.props.infoText}</p> */}
              <Button
                variant="primary"
                onClick={event => this.clickHandler(event)}
                name="neededSpecialist"
                value={this.props.neededSpecialist}
              >
                <i class="fas fa-check-circle" />{" "}
              </Button>
              <Button
                variant="outline-dark ml-1"
                onClick={event => this.clickHandler(event)}
              >
                <i class="far fa-question-circle" />
              </Button>
            </div>
          </div>
        </Card>
      </PoseGroup>
    );
  }
}

export default SpecialtyCard;
