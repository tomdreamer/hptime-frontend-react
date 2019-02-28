//Main
import React, { Component } from "react";
import "./App.scss";
import "mapbox-gl/dist/mapbox-gl.css";
import { Switch, Route, NavLink } from "react-router-dom";
import Navigation from "./components/Navigation";
import SingleMap from "./components/SingleMap";
import Results from "./components/Results";
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
        <header>
          <Navigation />
          

        </header>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/template" component={Template} />
          <Route path="/map" component={SingleMap} />
          <Route path="/results" component={Results} />
        </Switch>
        <footer className="fixed-bottom">App footer</footer>
      </div>
    );
  }
}

export default App;
