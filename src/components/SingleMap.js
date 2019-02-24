// See and copy pasta available components
import React, { Component } from "react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import ReactMapGL from "react-map-gl";

class SingleMap extends Component {
  constructor(props) {
    super(props);
    this.state = {
      viewport: {
        width: "36%",
        height: window.innerHeight - 56,
        latitude: 48.85341,
        longitude: 2.3488,
        zoom: 9.5,
        pitch: 45,
        bearing: -17.6
      }
    };
  }

  // fit map width to column siz
  componentDidMount() {
    let currentWidth = document.querySelector("#col-map").offsetWidth;
    let foo = document.getElementById("col-map").offsetWidth;
    console.log(foo, currentWidth);
    // gives whole document width instead of the single col
  }
  // possible alternative
  // https://github.com/uber/react-map-gl/issues/604#issuecomment-435292147

  render() {
    return (
      <Row className="no-gutters">
        <Col lg={3}> FILTERS HERE</Col>
        <Col xs={9} id="col-map">
          {/* // REFACTOR INSIDE A COMPONENT */}
          <ReactMapGL
            mapboxApiAccessToken={process.env.REACT_APP_MAPBOX_TOKEN}
            {...this.state.viewport}
            onViewportChange={viewport => this.setState({ viewport })}
          />
        </Col>
      </Row>
    );
  }
}

export default SingleMap;
