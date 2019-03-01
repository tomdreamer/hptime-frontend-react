// See and copy pasta available components
import React, { Component } from "react";
import "./SingleMap.scss";
import MapGL, { Marker } from "react-map-gl";
import MapMarker from "./MapMarker.js";
import PopUp from "./PopUp.js";

class SingleMap extends Component {
  constructor(props) {
    super(props);
    this.state = {
      displayedItems: {},
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

  // update map on window size
  _onViewportChange(viewport) {
    this.setState({ viewport });
  }

  _renderItems() {
    //mapportion was here
  }

  render() {
    const { viewport } = this.state;
    // -----------
    const { displayedItems } = this.state;

    const markerMap = displayedItems.map((oneItem, index) => {
      return (
        <Marker
          key={`marker-${index}`}
          longitude={oneItem.longitude}
          latitude={oneItem.latitude}
        >
          <PopUp
            key={`PopUp-${index}`}
            longitude={oneItem.longitude}
            latitude={oneItem.latitude}
          />
        </Marker>
      );
    });
    // -----------

    return (
      <MapGL
        {...viewport}
        mapboxApiAccessToken="pk.eyJ1IjoicHJvamVjdDNpcm9uaGFjayIsImEiOiJjanNpdzA4aXcxemloNDRueDBkaXlkZDh0In0.bbNCzs-0njORLSHu9bXeDQ"
        mapStyle="mapbox://styles/project3ironhack/cjsk4xibk5rjh1fmqo9k31hym"
        width="100%"
        height={window.innerHeight - 56}
        onViewportChange={this._onViewportChange}
      >
        <Marker latitude={48.858372} longitude={2.294481}>
          <MapMarker size={20} />
          <PopUp />
        </Marker>

        {markerMap}
      </MapGL>
    );
  }
}

export default SingleMap;
