import React, { Component } from "react";
import "./SpeedDial.css";

class SpeedDial extends Component {
  render() {
    return (
      <a href="tel:15" class="float">
        <i class="fa fa-phone my-float" aria-hidden="true" /> 15
      </a>
    );
  }
}
export default SpeedDial;
