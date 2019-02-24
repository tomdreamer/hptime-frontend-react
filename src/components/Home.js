import React, { Component } from "react";
import Container from "react-bootstrap/Container";
import { LinkContainer } from "react-router-bootstrap";
import Button from "react-bootstrap/Button";

class Home extends Component {
  render() {
    return (
      <Container>
        <LinkContainer to="/template">
          <Button variant="info">Template</Button>
        </LinkContainer>
      </Container>
    );
  }
}

export default Home;
