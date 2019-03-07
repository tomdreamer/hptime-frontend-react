import React, { Component } from "react";
import Card from "react-bootstrap/Card";
import { LinkContainer } from "react-router-bootstrap";
//import SingleMap from "./SingleMap.js";
import Collapse from "react-bootstrap/Collapse";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
//import Swal from "sweetalert2";
//import { Redirect } from "react-router";
import MapGL from "react-map-gl";
import "./Structuredetails.scss";
import { getStructureDetails } from "../api.js";
//import { Link } from "react-router-dom";

class Structuredetails extends Component {
  constructor(props) {
    super(props);
    this.state = {
      open: true,
      viewport: {
        latitude: 48.85341,
        longitude: 2.3488,
        zoom: 10,
        pitch: 45,
        bearing: -17.6
      },
      structureItem: {},
      times: "",
      redirect: false
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
      console.log(n);
      console.log(structureItem.sunday);
      let times = "";
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
          times = structureItem.monday;
          break;
        case 2:
          times = structureItem.tuesday;
          break;
        case 3:
          times = structureItem.wednesday;
          break;
        case 4:
          times = structureItem.thursday;
          break;
        case 5:
          times = structureItem.friday;
          break;
        case 6:
          times = structureItem.saturday;
          break;
        case 7:
          times = structureItem.sunday;
          break;
        default:
          console.log("Sorry, we did not find time");
        }
        if (times === "") {
          times = "fermé";
        }
      } else {
        times = "Ouvert 24h/24 - 7j/7";
      }
      console.log(times);

      this.setState({ structureItem, times });
    });
  }

  render() {
    const { open, structureItem, times } = this.state;
    const { viewport } = this.state;
    const MAPBOX_KEY = process.env.REACT_APP_MAPBOX_TOKEN;

    return (
      <Row className="no-gutters">
        {/* list of relevant results with a toggle button */}
        <Col
          sm={{ span: 12, order: 2 }}
          md={{ span: 4, order: 2 }}
          id="map-filter"
        >
          <div id="accordion" />
          <div className="card border-bottom-0">
            <div className="card-header" id="headingOne">
              {open ? (
                <Button
                  variant="primary"
                  size="lg"
                  block
                  className="d-md-none"
                  onClick={() => this.setState({ open: !open })}
                  aria-controls="example-collapse-text"
                  aria-expanded={open}
                >
                  <p className="clollapsBtnText">Carte seulement</p>
                </Button>
              ) : (
                <Button
                  variant="outline-primary"
                  size="lg"
                  block
                  className="d-md-none"
                  onClick={() => this.setState({ open: !open })}
                  aria-controls="example-collapse-text"
                  aria-expanded={open}
                >
                  <p className="clollapsBtnText">Carte et propositions</p>
                </Button>
              )}
              <LinkContainer to="/map">
                <Button variant="secondary" size="sm" block className="back">
                  <i className="fas fa-arrow-left" /> Retour
                </Button>
              </LinkContainer>
            </div>
            <Collapse
              in={this.state.open}
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
                      <Card.Text>Adresse et horaires : {times}</Card.Text>
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

        {/* map container receiving data and user location as props */}
        <Col sm={{ span: 12, order: 2 }} md={{ span: 8, order: 2 }}>
          <MapGL
            {...viewport}
            mapboxApiAccessToken={MAPBOX_KEY}
            mapStyle="mapbox://styles/project3ironhack/cjsk4xibk5rjh1fmqo9k31hym"
            width="100%"
            height={window.innerHeight - 56}
            // 56 to substract navbar height of window size so the map is full height
            onViewportChange={this._onViewportChange}
          >
            {/* user marker  */}
            {/* {this.renderUserMarker(userLocation)} */}
            {/* calling method below with Marker */}
            {/* {this.renderMapAndMarkers()} */}
            {/* displaying PopUp */}
            {/* {this.renderPopup()} */}
          </MapGL>
        </Col>
      </Row>
    );
  }
}

export default Structuredetails;
