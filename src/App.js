import React, { Component } from "react";
import "./App.scss";
import "mapbox-gl/dist/mapbox-gl.css";
import { Switch, Route, NavLink } from "react-router-dom";
import Navigation from "./components/Navigation";
import Home from "./components/Home";
import Template from "./components/Template";
import SingleMap from "./components/SingleMap";
import Results from "./components/Results";
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
