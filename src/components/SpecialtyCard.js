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
          </div>
          <div className="w-100 px-2">
            <div className="card-title p-2 text-dark font-weight-light">
              <h4 className="font-weight-light">{this.props.bodyPart}</h4>
            </div>

            <div className="card-block p-2 pl-2 d-flex justify-content-end">
              {/* <p className="card-text">{this.props.infoText}</p> */}
              <Button
                variant="outline-dark mr-2"
                // onClick={event => this.clickHandler(event)}
              >
                <i className="far fa-question-circle" />
              </Button>
              <Button
                variant="primary"
                className="w-50"
                onClick={event => this.clickHandler(event)}
                name="neededSpecialist"
                value={this.props.neededSpecialist}
              >
                Valider
              </Button>
            </div>
          </div>
        </div>
      </Col>
    );
  }
}

export default SpecialtyCard;
