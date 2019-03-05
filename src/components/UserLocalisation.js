import React, { Component } from "react";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import LocationSearchInput from "./LocationSearchInput.js";
import "./UserLocalisation.scss";

class UserLocalisation extends Component {
  render() {
    return (
      <section className="text-center">
        <div className="bg-directions" />
        <p className="lead my-4">Trouvez des soins proches de vous.</p>

        <Col md={{ span: 12 }}>
          <div className="bg-light shadow-sm border rounded p-2 w-50 mx-auto">
            <LocationSearchInput
              onGeolocation={this.props.onGeolocation}
              nextStep={event => this.props.nextStep(event)}
            />
          </div>
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
                  <span class="text-dark">Cliquez ici !</span>
                </span>
              </label>
            </div>
          </Form>
        </Col>
      </section>
    );
  }
}

export default UserLocalisation;
