import React, { PureComponent } from "react";
import "./IsEmergency.css";
import Button from "react-bootstrap/Button";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

class IsEmergency extends PureComponent {
  render() {
    return (
      <section className="IsEmergency">
        <Row className="justify-content-md-center">
          <Col md="8">
            {" "}
            En case d'urgance vitale, contactez immdéiatement le SAMU (15) ou
            rendez vous aux urgences les plus proches.
            <br />
            <br />
            Les temps d'attete affiches sont des estimations et ne concernent
            que les patients de gravite moyenne (urgances relative) ou faible
            (simples consultations aux urgances).
            <br />
            <br />
            Les urgances vitals sont prises en charges immédiatement
            <br />
            <br />
            <Button variant="info">Accepter et Continuer</Button>
          </Col>
        </Row>
      </section>
    );
  }
}

export default IsEmergency;
