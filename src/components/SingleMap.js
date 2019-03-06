// See and copy pasta available components
import React, { Component } from "react";
import "./SingleMap.scss";
import MapGL, { Marker, FlyToInterpolator } from "react-map-gl";
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
        zoom: 10,
        pitch: 45,
        bearing: -17.6
      },
      popupInfo: null
    };

    this._onViewportChange = this._onViewportChange.bind(this);
    this.renderUserMarker = this.renderUserMarker.bind(this);
    // need to bind the specific event to avoid triggering on load
  }

  renderMapAndMarkers() {
    const structureArray = this.props.structureArray;
    let resultArray = structureArray.map((oneItem, index) => {
      return (
        <Marker
          key={`marker-${index}`}
          longitude={oneItem.longitude}
          latitude={oneItem.latitude}
        >
          <MapMarker
            structureArray={this.props.structureArray}
            oneItem={oneItem}
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

  // set user current marker and fly to it
  renderUserMarker(location) {
    if (location) {
      return (
        <Marker latitude={location.latitude} longitude={location.longitude}>
          <UserMarker />
        </Marker>
      );
    }
  }

  // change viewport ()
  _goToViewport(longitude, latitude) {
    this._onViewportChange({
      viewport: { longitude, latitude },
      zoom: 14,
      transitionInterpolator: new FlyToInterpolator(),
      transitionDuration: 2500
    });
  }

  /////Master Render//////
  render() {
    const { viewport } = this.state;
    const { userLocation } = this.props;
    console.log(this.props.structureArray, "coucou");

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
        {this.renderUserMarker(userLocation)}
        {/* calling method below with Marker */}
        {this.renderMapAndMarkers()}
        {/* displaying PopUp */}
        {this.renderPopup()}
      </MapGL>
    );
  }
}

export default SingleMap;
