import React, { Component } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";

class SpecialtyCard extends Component {
  state = {};
  render() {
    return (
      <section className="SpecialtyCard">
        <div className="row">
          <div className="container d-flex">
            <div className="col-md-4">
              <img src={this.props.picture} />
            </div>

            <div className="col-md-8">
              <div className="col-md-12">
                <h5>{this.props.bodyPart}</h5>
              </div>

              <div className="row">
                <div className="container d-flex">
                  <div className="col-md-6">
                    <Button>Infos</Button>
                  </div>
                  <div className="col-md-6">
                    <Button>Valider</Button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default SpecialtyCard;
