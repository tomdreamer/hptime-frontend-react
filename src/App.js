//Main
import React, { Component } from "react";
import { Switch, Route } from "react-router-dom";
//Components
import Navigation from "./components/Navigation.js";
import IsEmergency from "./components/IsEmergency.js";
import SpeedDial from "./components/SpeedDial.js";
import FormFill from "./components/FormFill.js";
import Results from "./components/Results.js";
import MapWrapper from "./components/MapWrapper.js";
import NotFound from "./components/NotFound.js";
//Css/styling
import "./App.scss";
import "mapbox-gl/dist/mapbox-gl.css";
import { Switch, Route } from "react-router-dom";
import Navigation from "./components/Navigation";
import Home from "./components/Home";
import Template from "./components/Template";
import SingleMap from "./components/SingleMap";
import Questions from "./components/Questions";
import Container from "react-bootstrap/Container";
import "mapbox-gl/dist/mapbox-gl.css";

require("dotenv").config();

class App extends Component {
  render() {
    return (
      <div className="App">
        <Container>
          <header>
            <Navigation />
          </header>

          <Switch>
            <Route path="/" exact component={IsEmergency} />
            <Route path="/map" component={MapWrapper} />
            <Route path="/results" component={Results} />
            <Route path="/form" component={Questions} />

            <Route path="/404" component={NotFound} />
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
