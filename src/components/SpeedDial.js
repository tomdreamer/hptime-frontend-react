import React, { Component } from "react";
import "./SpeedDial.css";

class SpeedDial extends Component {
  render() {
    return (
      <a href="tel:15" className="float bg-danger text-white rounded-circle">
        <i className="fa fa-phone my-float fa-sm" aria-hidden="true" />{" "}
        <span className="dial-text">15</span>
      </a>
    );
  }
}
export default SpeedDial;
