import React, { Component } from "react";
import { LinkContainer } from "react-router-bootstrap";
import Card from "react-bootstrap/Card";
import Collapse from "react-bootstrap/Collapse";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import { getStructureDetails } from "../api.js";

class StructureDetail extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isStructureOpen: true,
      structureItem: {},
      openingHours: ""
    };
  }
  componentDidMount() {
    // get path params from React Router props
    const { params } = this.props.match;
    // use the ID in path params to get the details from the backend API
    getStructureDetails(params.structureId).then(response => {
      // ALWAYS console.log() response.data to see what the API gave you
      console.log("Structure details", response.data);
      // save the JSON data from the API into the state
      const structureItem = response.data;

      let d = new Date();
      let n = d.getDay();
      //console.log(n);
      console.log(structureItem.sunday);
      let openingHours = "";
      if (
        structureItem.monday ||
        structureItem.tuesday ||
        structureItem.wednesday ||
        structureItem.thursday ||
        structureItem.friday ||
        structureItem.saturday ||
        structureItem.sunday
      ) {
        switch (n) {
        case 1:
          openingHours = structureItem.monday;
          break;
        case 2:
          openingHours = structureItem.tuesday;
          break;
        case 3:
          openingHours = structureItem.wednesday;
          break;
        case 4:
          openingHours = structureItem.thursday;
          break;
        case 5:
          openingHours = structureItem.friday;
          break;
        case 6:
          openingHours = structureItem.saturday;
          break;
        case 7:
          openingHours = structureItem.sunday;
          break;
        default:
          console.log("Sorry, we did not find time");
        }
        if (openingHours === "") {
          openingHours = "fermé";
        }
      } else {
        openingHours = "Ouvert 24h/24 - 7j/7";
      }
      //console.log(openingHours);

      this.setState({ structureItem, openingHours });
    });
  }

  render() {
    const { isStructureOpen, structureItem, openingHours } = this.state;
    return (
      <Col
        sm={{ span: 12, order: 2 }}
        md={{ span: 4, order: 2 }}
        id="map-filter"
      >
        <div id="accordion" />
        <div className="card border-bottom-0">
          <div className="card-header" id="headingOne">
            {/* {isStructureOpen ? (
              ) : (  
              )} */}
            <LinkContainer to="/map">
              <Button variant="secondary" size="sm" block className="back">
                <i className="fas fa-arrow-left" /> Retour
              </Button>
            </LinkContainer>
          </div>
          <Collapse
            in={this.state.isStructureOpen}
            className="dim"
            id="example-collapse-text"
          >
            <div aria-labelledby="headingOne" data-parent="#accordion">
              <Card>
                <Card.Body>
                  <Card.Title>{structureItem.name}</Card.Title>
                  <Card.Subtitle className="mb-2 text-muted">
                    {structureItem.type}
                  </Card.Subtitle>
                  <address className="d-block p-2 bg-light">
                    <Card.Text>Adresse et horaires : {openingHours}</Card.Text>
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
            </div>
          </Collapse>
        </div>
      </Col>
    );
  }
}

export default StructureDetail;
