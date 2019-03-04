import React, { Component } from "react";
import { LinkContainer } from "react-router-bootstrap";
import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import Form from "react-bootstrap/Form";
import LocationSearchInput from "./LocationSearchInput.js";

class Navigation extends Component {
  // state = { }

  render() {
    return (
      <Container>
        <Navbar bg="light" variant="light" expand="sm" fixed="top">
          <LinkContainer to="/">
            <Navbar.Brand>MedDirect</Navbar.Brand>
          </LinkContainer>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="mr-auto">
              <LinkContainer to="/form">
                <Nav.Link>Form Component</Nav.Link>
              </LinkContainer>
              <LinkContainer to="/map">
                <Nav.Link>Map Component</Nav.Link>
              </LinkContainer>
              <LinkContainer to="/geolocation">
                <Nav.Link>Geoloc</Nav.Link>
              </LinkContainer>
              {this.props.currentUser ? (
                <span>
                  <LinkContainer to="/map">
                    <Nav.Link onClick={() => this.props.logoutClick()}>
                      Log Out{" "}
                    </Nav.Link>
                  </LinkContainer>
                </span>
              ) : (
                <span>
                  {" "}
                  <LinkContainer to="/signup">
                    <Nav.Link>S'enregistrer</Nav.Link>
                  </LinkContainer>
                  <LinkContainer to="/login">
                    <Nav.Link>Se connecter</Nav.Link>
                  </LinkContainer>
                </span>
              )}

              {/* <button onClick={() => this.props.logoutClick()}>Log Out</button> */}
            </Nav>
            <Form inline>
              <LocationSearchInput />
            </Form>
          </Navbar.Collapse>
        </Navbar>
      </Container>
    );
  }
}

export default Navigation;
