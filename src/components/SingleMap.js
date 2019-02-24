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
        height: window.innerHeight - 56,
        // get navbar current height instead
        latitude: 48.85341,
        longitude: 2.3488,
        zoom: 9.5,
        pitch: 45,
        bearing: -17.6
      }
    };
  }

  // adapt viewport to col width
  _onViewportChange = viewport => this.setState({ viewport });

  render() {
    const { viewport } = this.state;

    return (
      <Row className="no-gutters">
        <Col lg={3}> FILTERS HERE</Col>
        <Col sm={12} md={9}>
          {/* // REFACTOR INSIDE A COMPONENT */}
          <ReactMapGL
            {...viewport}
            mapboxApiAccessToken={process.env.REACT_APP_MAPBOX_TOKEN}
            width="100%"
            onViewportChange={this._onViewportChange}
          />
        </Col>
      </Row>
    );
  }
}

export default SingleMap;
