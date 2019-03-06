import React, { Component } from "react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import LocationSearchInput from "./LocationSearchInput.js";
import "./UserLocalisation.scss";

class UserLocalisation extends Component {
  render() {
    return (
      <section className="text-center ">
        <div className="bg-directions m-4" />
        <p className="lead my-4">Trouvez des soins proches de vous.</p>
        <Row>
          <Col
            sm={{ span: 12 }}
            className=" px-5 d-flex justify-content-center"
          >
            <Col className="bg-light shadow-sm border rounded p-2 col-md-6 col-xs-12">
              <LocationSearchInput
                onGeolocation={this.props.onGeolocation}
                nextStep={event => this.props.nextStep(event)}
              />
            </Col>
          </Col>
        </Row>
        <Row>
          <Col sm={{ span: 12 }} className="d-flex justify-content-center">
            {/* prescription checkbox */}
            <Form className="p-2 small w-50 mx-auto text-left">
              <div key="hint-checkbox" className="hint-checkbox m-2 px-2">
                <label>
                  <Form.Check
                    type="checkbox"
                    id="prescription"
                    className="d-inline mr-2"
                  />
                  <span className="text-muted">
                    C'est pour renouveller une ordonnance ?{" "}
                    <span className="text-secondary">Cliquez ici !</span>
                  </span>
                </label>
              </div>
            </Form>
          </Col>
        </Row>
      </section>
    );
  }
}

export default UserLocalisation;
