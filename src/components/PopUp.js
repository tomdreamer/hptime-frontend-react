import React, { Component } from "react";
import "./PopUp.css";
import { Popup } from "react-map-gl";

class PopUp extends Component {
  render() {
    return (
      <Popup
        latitude={48.858372}
        longitude={2.294481}
        closeButton={true}
        closeOnClick={false}
        anchor="top"
        className="PopUp"
        onClose={() => this.setState({ popupInfo: null })}
      >
        <div>You are here</div>
      </Popup>
    );
  }
}

export default PopUp;
