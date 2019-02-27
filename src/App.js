//Main
import React, { Component } from "react";
import { Switch, Route } from "react-router-dom";
//Components
import Navigation from "./components/Navigation";
import SingleMap from "./components/SingleMap";
import IsEmergency from "./components/IsEmergency";
import SpeedDial from "./components/SpeedDial";
//Css/styling
import "./App.scss";
import "mapbox-gl/dist/mapbox-gl.css";
import Container from "react-bootstrap/Container";
require("dotenv").config();

class App extends Component {
  render() {
    return (
      <div className="App">
        <Container fluid>
          <header>
            <Navigation />
          </header>

          <Switch>
            <Route path="/map" component={SingleMap} />
            <Route path="/" exact component={IsEmergency} />
          </Switch>
          <footer className="fixed-bottom">
            <SpeedDial />
          </footer>
        </Container>
      </div>
    );
  }
}

export default App;
