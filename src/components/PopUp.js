import React, { Component } from "react";
import "./PopUp.css";
import { Popup } from "react-map-gl";

class PopUp extends Component {
  render() {
    return (
      <Popup
        latitude={this.props.latitude}
        longitude={this.props.longitude}
        openButton={true}
        closeButton={true}
        closeOnClick={false}
        anchor="top"
        className="PopUp"
        onClose={() => this.setState({ popupInfo: null })}
      >
        <div>{this.props.popupName}</div>
      </Popup>
    );
  }
}

export default PopUp;
