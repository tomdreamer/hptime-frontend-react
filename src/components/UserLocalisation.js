import React, { Component } from "react";
import Button from "react-bootstrap/Button";
import Jumbotron from "react-bootstrap/Button";

import { Link } from "react-router-dom";

class UserLocalisation extends Component {
  render() {
    return (
      <div className="UserLocalisation">
        <h3>Ou se trouve le patient ?</h3>
        <Jumbotron>
          <h3>Entrez votre adresse.</h3>

          <Button variant="primary">Vers mes résultats</Button>
        </Jumbotron>
        <Link to="/map">vers les résultats</Link>
      </div>
    );
  }
}

export default UserLocalisation;
