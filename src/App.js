import React, { Component } from "react";
import "./App.scss";
import Button from "react-bootstrap/Button";

class App extends Component {
  render() {
    return (
      <div className="App">
        <header>
          <p>
            <Button variant="primary">Bootstrap 4 themed components</Button>
          </p>
        </header>
      </div>
    );
  }
}

export default App;
