// See and copy pasta available components
import React, { Component } from "react";
import "./SingleMap.scss";
import MapGL, { Marker } from "react-map-gl";
import MapMarker from "./MapMarker.js";
import PopUp from "./PopUp";

class SingleMap extends Component {
  constructor(props) {
    super(props);
    this.state = {
      displayedItems: [],
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
    const argumentContainer = this.props.dataFrombackend;
    let shownArray = argumentContainer.map((oneItem, index) => {
      return (
        <div>
          <Marker
            key={`marker-${index}`}
            longitude={oneItem.longitude}
            latitude={oneItem.latitude}
          >
            <MapMarker onClick={() => this.setState({ popupInfo: oneItem })} />
          </Marker>
        </div>
      );
    });
    return shownArray;
  }

  // update map on window size
  _onViewportChange(viewport) {
    this.setState({ viewport });
  }

  renderPopup() {
    console.log("here it is");

    const { popupInfo } = this.state;
    // if there is info being passed to popup, it will show
    return popupInfo && <PopUp popupInfo={popupInfo} />;
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
        {/* calling method below with Marker */}
        {this.renderMapAndMarkers()}
        {/* displaying PopUp */}
        {this.renderPopup()}
      </MapGL>
    );
  }
}

export default SingleMap;
