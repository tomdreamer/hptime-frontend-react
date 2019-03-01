import React, { PureComponent } from "react";
import "./IsEmergency.css";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { Link } from "react-router-dom";

class IsEmergency extends PureComponent {
  render() {
    return (
      <section className="IsEmergency">
        <Row className="justify-content-md-center">
          <Col md="8">
            <div className="shadow p-3 mb-5 bg-white rounded" role="alert">
              <h4 className="alert-heading">!Attention!</h4>
              <p>
                Est-ce une urgence vitale?
                <br />
                <br />
                <a className="btn" href="tel:+3315">
                  Yes
                </a>{" "}
                <Link className="btn" to={"/form"}>
                  No
                </Link>
              </p>
            </div>
          </Col>
        </Row>
      </section>
    );
  }
}

export default IsEmergency;
