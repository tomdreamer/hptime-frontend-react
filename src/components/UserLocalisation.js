import React, { Component } from "react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import LocationSearchInput from "./LocationSearchInput.js";

class UserLocalisation extends Component {
  render() {
    return (
      <Row className="d-flex justify-content-center">
        <Col md={{ span: 6 }}>
          <div className="bg-light rounded p-5 mt-5">
            <LocationSearchInput />
            <p className="form-text text-muted small">
              Trouvez des soins proches de vous.
            </p>
          </div>
          <Form className="p-2 small">
            <div key="default-checkbox" className="mb-3">
              <Form.Check
                type="checkbox"
                id="prescription"
                label="C'est un simple renouvellement d'ordonnance ? Cliquez ici. "
              />
            </div>
          </Form>
        </Col>
      </Row>
    );
  }
}

export default UserLocalisation;
