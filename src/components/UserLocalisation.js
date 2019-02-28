import React, { Component } from "react";
import Button from "react-bootstrap/Button";
import { Link } from "react-router-dom";

class UserLocalisation extends Component {
  state = {};
  render() {
    return (
      <div className="UserLocalisation">
        <Link to="/results">Vers les resultats</Link>
      </div>
    );
  }
}

export default UserLocalisation;
