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
        {/* <p>
          <b> {popupInfo.name}</b>
          <br />
          <a href="tel:+33{popupInfo.phoneNumber}">
            {popupInfo.phoneNumber}
          </a>
        </p> */}

        <div className="card">
          <div className="card-body">
            <p className="card-text">
              {" "}
              <b>{popupInfo.name}</b>
            </p>
            <p className="card-text">
              <a href="tel:+33{popupInfo.phoneNumber}">
                {popupInfo.phoneNumber}
              </a>
            </p>
            <p className="card-text">
              {popupInfo.streetNumber} {popupInfo.roadType}{" "}
              {popupInfo.streetName}
              <br />
              {popupInfo.zipCode} {popupInfo.city}
            </p>
            <a href="#" class="card-link">
              Route Me
            </a>
            <a href={popupInfo.urlToPlan} class="card-link">
              Access Plan
            </a>
          </div>
        </div>
      </Popup>
    );
  }
}

export default PopUp;
