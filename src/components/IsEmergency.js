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
            <div class="shadow p-3 mb-5 bg-white rounded" role="alert">
              <h4 class="alert-heading">!Attention!</h4>
              <p>
                Est-ce une urgence vitale?
                <br />
                <br />
                <a className="btn" href="tel:+3315">
                  Yes
                </a>{" "}
                <a className="btn" href="/form">
                  No
                </a>
              </p>
            </div>
          </Col>
        </Row>
      </section>
    );
  }
}

export default IsEmergency;
