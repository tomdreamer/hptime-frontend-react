//Main
import React, { Component } from "react";
import { Switch, Route } from "react-router-dom";
//Components
import Navigation from "./components/Navigation.js";
import IsEmergency from "./components/IsEmergency.js";
import MapWrapper from "./components/MapWrapper.js";
import NotFound from "./components/NotFound.js";
//Styling
import "./App.scss";
import "mapbox-gl/dist/mapbox-gl.css";
import Questions from "./components/Questions.js";
import "mapbox-gl/dist/mapbox-gl.css";
import SignupPage from "./components/SignUpPage.js";
import LoginPage from "./components/LoginPage.js";
import GeolocationPoint from "./components/GeolocationCoodinates.js";
import { getLogout } from "./api";
import posed, { PoseGroup } from "react-pose";
import PathologyQuestions from "./components/PathologyQuestions.js";

require("dotenv").config();

class App extends Component {
  constructor(props) {
    super(props);
    let userInfo = localStorage.getItem("currentUser");
    if (userInfo) {
      // turns the string back into an object if we are logged in
      userInfo = JSON.parse(userInfo);
    }
    this.state = {
      currentUser: userInfo,

      patientGender: "",
      neededSpecialist: "",
      patientAdult: "",
      beforeChildren: true,
      patientLocation: { latitude: 0, longitude: 0 }
    };
  }

  updateUser(newUser) {
    if (newUser) {
      // save the user info in local storage if we are logging IN
      // turn it into a json string before we save
      localStorage.setItem("currentUser", JSON.stringify(newUser));
    } else {
      // delete this info when we are loging out
      localStorage.removeItem("currentUser");
    }
    this.setState({ currentUser: newUser });
  }

  updatePatient(event) {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  }

  updatePatientPosition(latitude, longitude) {
    this.setState({
      patientLocation: { latitude, longitude }
    });
  }

  logoutClick() {
    getLogout()
      .then(response => {
        // console.log("Log Out", response.data);
        // set the currentUser state to empty
        this.updateUser(null);
      })
      .catch(err => err);
  }

  render() {
    const { neededSpecialist, patientAdult, patientLocation } = this.state;
    return (
      <div className="App">
        <header>
          <Navigation
            currentUser={this.state.currentUser}
            logoutClick={() => this.logoutClick()}
          />
        </header>

        <Switch>
          <Route path="/" exact component={IsEmergency} key="isEmergency" />
          <Route
            key="3"
            path="/map"
            render={() => {
              return (
                <MapWrapper
                  neededSpecialist={neededSpecialist}
                  patientType={patientAdult}
                  userLocation={patientLocation}
                />
              );
            }}
          />
          <Route key="geoloc" path="/geoloc" component={GeolocationPoint} />
          <Route
            key="form"
            path="/form"
            render={() => {
              return (
                <Questions
                  updatePatient={event => this.updatePatient(event)}
                  onGeolocation={(latitude, longitude) =>
                    this.updatePatientPosition(latitude, longitude)
                  }
                />
              );
            }}
          />

          <Route
            key="signup"
            path="/signup"
            render={() => {
              return (
                <SignupPage
                  currentUser={this.state.currentUser}
                  signupSuccess={user => this.updateUser(user)}
                />
              );
            }}
          />
          <Route
            key="login"
            path="/login"
            render={() => {
              return (
                <LoginPage
                  currentUser={this.state.currentUser}
                  loginSuccess={user => this.updateUser(user)}
                />
              );
            }}
          />

          <Route component={NotFound} key="NotFound" />
        </Switch>
      </div>
    );
  }
}

export default App;
