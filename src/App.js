import React, { Component } from "react";
import "./App.scss";
import { Switch, Route } from "react-router-dom";
import Navigation from "./components/Navigation";
import Home from "./components/Home";
import Template from "./components/Template";

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
        </Switch>
        <footer>App footer</footer>
      </div>
    );
  }
}

export default App;
