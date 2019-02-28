import React, { Component } from "react";
import "./MapWrapper.css";
import SingleMap from "./SingleMap.js";
import MapMarker from "./MapMarker.js";
import PopUp from "./PopUp.js";

class MapWrapper extends Component {
  render() {
    return (
      <section className="MapWrapper">
        {/* Map Component */}
        <SingleMap />

        {/* Map Marker */}
        <MapMarker />

        {/* Pop Up */}
        <PopUp />
      </section>
    );
  }
}

export default MapWrapper;
