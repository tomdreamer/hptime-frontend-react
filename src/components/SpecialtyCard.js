import React, { Component } from "react";
import Button from "react-bootstrap/Button";
import "./SpecialtyCard.scss";
// left image card template https://www.codeply.com/go/l1KAQtjjbA
class SpecialtyCard extends Component {
  clickHandler(event) {
    this.props.updatePatient(event);
    this.props.nextStep();
  }
  render() {
    return (
      <div
        className="card flex-row m-4 border-0 bg-light"
        key={this.props.index}
      >
        <div className="card-header bg-white p-2 m-0 d-flex flex-wrap align-items-center border-left border-bottom-0">
          <img
            src={this.props.picture}
            alt={this.props.bodyPart}
            className="picto bg-light d-block mx-auto"
          />
        </div>
        <div className="card-block p-2 px-4">
          <p className="card-text">{this.props.infoText}</p>
          <Button
            variant="primary"
            onClick={event => this.clickHandler(event)}
            name="neededSpecialist"
            value={this.props.neededSpecialist}
          >
            {this.props.bodyPart}
          </Button>
        </div>
      </div>
    );
  }
}

export default SpecialtyCard;
