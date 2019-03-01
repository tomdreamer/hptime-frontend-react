import React, { Component } from "react";
import Button from "react-bootstrap/Button";
import Collapse from "react-bootstrap/Collapse";

class SpecialtyCard extends Component {
  constructor(props) {
    super(props);
    this.state = { open: false };
  }

  clickHandler(event) {
    this.props.updatePatient(event);
    this.props.nextStep();
  }
  render() {
    const { open } = this.state;
    return (
      <section key={this.props.index} className="SpecialtyCard">
        <div className="row">
          <div className="container d-flex">
            <div className="col-md-3">
              <img alt={this.props.bodyPart} src={this.props.picture} />
            </div>

            <div className="col-md-9">
              <div className="col-md-12">
                <h6>{this.props.bodyPart}</h6>
              </div>

              <div className="row">
                <div className="container d-flex">
                  <div className="col-md-6">
                    <Button
                      onClick={event => this.clickHandler(event)}
                      name="neededSpecialist"
                      value={this.props.neededSpecialist}
                    >
                      Valider
                    </Button>
                  </div>
                  <div className="col-md-6">
                    <Button
                      onClick={() => this.setState({ open: !open })}
                      className="btn-secondary"
                    >
                      Infos
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="container">
            <>
              <Collapse in={this.state.open}>
                <div id="example-collapse-text">{this.props.infoText}</div>
              </Collapse>
            </>
          </div>
        </div>
      </section>
    );
  }
}

export default SpecialtyCard;
