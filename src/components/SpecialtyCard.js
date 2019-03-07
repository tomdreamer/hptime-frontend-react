import React, { Component } from "react";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import "./SpecialtyCard.scss";

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
      <Col>
        <div className="card flex-row m-3 bg-white" key={this.props.index}>
          <div className="card-header bg-light p-2">
            <img
              src={this.props.picture}
              alt={this.props.bodyPart}
              className="picto d-block mx-auto"
            />
            <Button
              variant="primary"
              className="mt-2 btn-sm w-100"
              onClick={event => this.clickHandler(event)}
              name="neededSpecialist"
              value={this.props.neededSpecialist}
            >
              Valider
            </Button>
          </div>
          <div className="w-100 px-2 d-flex flex-column justify-content-center">
            <div className="card-titlepx-2 pt-2 pb-0 mb-0 text-dark font-weight-light">
              <h5 className="font-weight-light m-0">{this.props.bodyPart}</h5>
            </div>
            <div className=" pt-1 pb-0 mb-0 text-dark font-weight-light">
              <p className="small font-weight-light">{this.props.infoText}</p>
            </div>

            {/* <div className="card-block p-2 pl-2 d-flex justify-content-end"> */}
            {/* <p className="card-text">{this.props.infoText}</p> */}
            {/* <Button
                variant="outline-dark mr-2"
                // onClick={event => this.clickHandler(event)}
              >
                <i className="far fa-question-circle" />
              </Button> */}
            {/* </div> */}
          </div>
        </div>
      </Col>
    );
  }
}

export default SpecialtyCard;
