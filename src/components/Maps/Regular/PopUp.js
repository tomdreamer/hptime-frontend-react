import React, { Component } from "react";
import { Popup } from "react-map-gl";
import "./PopUp.scss";

class PopUp extends Component {
  render() {
    const { popupInfo } = this.props;

    return (
      <div className="card">
        <div className="card-body">
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
            <p className="card-text small">
              {" "}
              <b>{popupInfo.name}</b>
            </p>
            <p className="card-text small">
              <a href="tel:+33{popupInfo.phoneNumber}">
                {popupInfo.phoneNumber}
              </a>
            </p>
            <p className="card-text small">
              {popupInfo.streetNumber} {popupInfo.roadType}{" "}
              {popupInfo.streetName}
              <br />
              {popupInfo.zipCode} {popupInfo.city}
            </p>

            <a
              href={`http://maps.google.com/?q=${popupInfo.latitude},${
                popupInfo.longitude
              }`}
              className="card-link small"
            >
              Route Me
            </a>

            <a href={`${popupInfo.urlToPlan}`} className="card-link small">
              Access Plan{" "}
            </a>
          </Popup>
        </div>
      </div>
    );
  }
}

export default PopUp;
