import React, { Component } from "react";
import "./PopUp.css";
import ReactMapGL, { Popup } from "react-map-gl";

class PopUp extends Component {
  render() {
    return (
      <ReactMapGL latitude={37.78} longitude={-122.41} zoom={8}>
        <Popup
          latitude={37.78}
          longitude={-122.41}
          closeButton={true}
          closeOnClick={false}
          anchor="top"
        >
          <div>You are here</div>
        </Popup>
      </ReactMapGL>
    );
  }
}

export default PopUp;
