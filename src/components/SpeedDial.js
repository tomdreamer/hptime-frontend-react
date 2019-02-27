import React, { PureComponent } from "react";
import "./SpeedDial.css";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

class SpeedDial extends PureComponent {
  render() {
    return (
      <section className="SpeedDial">
        <Row>
          <Col sm>
            <a variant="danger" className="btn btn-danger" href="tel:+3315">
              Appeler l'Urgence
            </a>
          </Col>
        </Row>
      </section>
    );
  }
}

export default SpeedDial;
