import React, { Component } from "react";
import Button from "react-bootstrap/Button";
import "./MedicalSpecialtyCard.scss";

class MedicalSpecialtyCard extends Component {
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
      <div className="card flex-row m-3 bg-white" key={this.props.index}>
        <div className="col-4 card-header bg-light p-2">
          <img
            src={this.props.picture}
            alt={this.props.bodyPart}
            className="picto d-block mx-auto"
          />
        </div>
        <div className=" col-8 w-100 px-2 d-flex flex-column justify-content-between">
          <div className="w-100 card-titlepx-2 pt-2 pb-0 mb-0 text-dark font-weight-light">
            <h5 className="font-weight-light m-0">{this.props.bodyPart}</h5>
          </div>
          <div className="w-100 d-flex justify-content-between">
            <a
              className="btn"
              data-toggle="collapse"
              href={"#B" + this.props.index}
              role="button"
              aria-expanded="false"
              aria-controls="collapseExample"
            >
              <i className="far fa-question-circle" />
            </a>
            <Button
              variant="primary"
              className="mt-2 btn-sm w-50 "
              onClick={event => this.clickHandler(event)}
              name="neededSpecialist"
              value={this.props.neededSpecialist}
            >
              Valider
            </Button>
          </div>
          <div className="w-100">
            <div className="collapse" id={"B" + this.props.index}>
              <div className="small py-2">{this.props.infoText}</div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default MedicalSpecialtyCard;
