import React, { Component } from "react";
//import { LinkContainer } from "react-router-bootstrap";
import Card from "react-bootstrap/Card";
//import Collapse from "react-bootstrap/Collapse";
import Col from "react-bootstrap/Col";
//import Button from "react-bootstrap/Button";
import { Link } from "react-router-dom";

class StructureDetail extends Component {
  render() {
    const { structureItem } = this.props;
    //    const { isStructureOpen, structureItem, openingHours } = this.state;
    console.log(this.props.emptyOneStructure);
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
        {/* <LinkContainer to="/map">
          <Button
            variant="secondary"
            size="sm"
            block
            className="back"
            onClick={this.props.emptyOneStructure}
          >
            <i className="fas fa-arrow-left" /> Retour
          </Button>
        </LinkContainer> */}

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
