import React, { PureComponent } from "react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

class SpeedDial extends PureComponent {
  render() {
    return (
      <section className="SpeedDial">
        <Row>
          <Col>
            <a
              variant="danger"
              className="btn btn-danger btn-block rounded-0"
              href="tel:15"
            >
              <i className="fas fa-phone" /> Appeler le SAMU (15)
            </a>
          </Col>
        </Row>
      </section>
    );
  }
}

export default SpeedDial;
