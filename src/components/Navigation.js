import React, { Component } from "react";
import { LinkContainer } from "react-router-bootstrap";
import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import Button from "react-bootstrap/Button";

class Navigation extends Component {
  // state = { }

  render() {
    return (
      <Container>
        <Navbar
          bg="white"
          variant="light"
          expand="sm"
          fixed="top"
          collapseOnSelect="true"
        >
          <LinkContainer to="/">
            <Navbar.Brand>
              {" "}
              Med<b>Direct</b>
            </Navbar.Brand>
          </LinkContainer>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="mr-auto">
              {this.props.currentUser ? (
                <>
                  <LinkContainer to="/signup">
                    <Nav.Link onClick={() => this.props.logoutClick()}>
                      Log Out
                    </Nav.Link>
                  </LinkContainer>
                </>
              ) : (
                <>
                  <LinkContainer to="/signup">
                    <Nav.Link>S'enregistrer</Nav.Link>
                  </LinkContainer>
                  <LinkContainer to="/login">
                    <Nav.Link>Se connecter</Nav.Link>
                  </LinkContainer>
                </>
              )}
            </Nav>
          </Navbar.Collapse>
        </Navbar>
      </Container>
    );
  }
}

export default Navigation;
