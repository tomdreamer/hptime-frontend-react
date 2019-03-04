// See and copy pasta available components
import React, { Component } from "react";
import "./SingleMap.scss";
import MapGL, { Marker } from "react-map-gl";
import MapMarker from "./MapMarker.js";
import UserMarker from "./UserMarker.js";
import PopUp from "./PopUp";

class SingleMap extends Component {
  constructor(props) {
    super(props);
    this.state = {
      hospitalArray: [],
      structureArray: [],
      altStructure: [],
      newstructureArray: [],
      viewport: {
        latitude: 48.85341,
        longitude: 2.3488,
        zoom: 9.5,
        pitch: 45,
        bearing: -17.6
      },
      popupInfo: null
    };
    this._onViewportChange = this._onViewportChange.bind(this);
  }

  renderMapAndMarkers() {
    const hospitalArray = this.props.hospitalArray;
    let resultArray = hospitalArray.map((oneItem, index) => {
      return (
        <Marker
          key={`marker-${index}`}
          longitude={oneItem.longitude}
          latitude={oneItem.latitude}
        >
          <MapMarker
            hospitalArray={this.props.hospitalArray}
            onClick={() => this.setState({ popupInfo: oneItem })}
          />
        </Marker>
      );
    });
    return resultArray;
  }

  clearPopup() {
    this.setState({ popupInfo: null });
  }

  // update map on window size
  _onViewportChange(viewport) {
    this.setState({ viewport });
  }

  renderPopup() {
    const { popupInfo } = this.state;
    return (
      popupInfo && (
        <PopUp popupInfo={popupInfo} onCloseClick={() => this.clearPopup()} />
      )
    );
  }

  // user current position (static atm)
  renderUserMarker(position) {
    return (
      <Marker latitude={48.871632} longitude={2.31091}>
        <UserMarker />
      </Marker>
    );
  }

  render() {
    const { viewport } = this.state;

    return (
      <MapGL
        {...viewport}
        mapboxApiAccessToken="pk.eyJ1IjoicHJvamVjdDNpcm9uaGFjayIsImEiOiJjanNpdzA4aXcxemloNDRueDBkaXlkZDh0In0.bbNCzs-0njORLSHu9bXeDQ"
        mapStyle="mapbox://styles/project3ironhack/cjsk4xibk5rjh1fmqo9k31hym"
        width="100%"
        height={window.innerHeight - 150}
        onViewportChange={this._onViewportChange}
      >
        {/* user marker  */}
        {this.renderUserMarker()}
        {/* calling method below with Marker */}
        {this.renderMapAndMarkers()}
        {/* displaying PopUp */}
        {this.renderPopup()}
      </MapGL>
    );
  }
}

export default SingleMap;
