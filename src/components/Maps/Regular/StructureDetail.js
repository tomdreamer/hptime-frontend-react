import React, { Component } from "react";
import { Link } from "react-router-dom";
import Card from "react-bootstrap/Card";
import Col from "react-bootstrap/Col";

class StructureDetail extends Component {
  render() {
    const { structureItem } = this.props;
    return (
      <Col sm={{ span: 12 }}>
        <Link
          to="#retour"
          className="text-secondary"
          onClick={this.props.emptyOneStructure}
        >
          <i className="fas fa-arrow-left mx-2" />
          Retour
        </Link>

        <Card>
          <Card.Body>
            <Card.Title>{structureItem.name}</Card.Title>
            <Card.Subtitle className="mb-2 text-muted">
              {structureItem.type}
            </Card.Subtitle>
            <address className="d-block p-2 bg-light">
              <p className="text-muted">
                {structureItem.streetNumber} {structureItem.roadType}{" "}
                {structureItem.streetName} - {structureItem.city},{" "}
                {structureItem.zipCode}
              </p>
              <Card.Link href="tel:+33{structureItem.phoneNumber}">
                {structureItem.phoneNumber}
              </Card.Link>
            </address>
          </Card.Body>
        </Card>
      </Col>
    );
  }
}

export default StructureDetail;
