import React, { Component } from "react";
import "./PopUp.css";
import { Popup } from "react-map-gl";

class PopUp extends Component {
  render() {
    const { popupInfo } = this.props;

    return (
      <Popup
        className="PopUp"
        // info passed
        longitude={popupInfo.longitude}
        latitude={popupInfo.latitude}
        // functionality
        closeOnClick={false}
        anchor="top"
        onClose={this.props.onCloseClick}
      >
        <p>{popupInfo.group}</p>
      </Popup>
    );
  }
}

export default PopUp;
