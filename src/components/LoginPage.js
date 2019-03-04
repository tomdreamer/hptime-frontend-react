import React, { Component } from "react";
import { Redirect } from "react-router-dom";

import "./LoginPage.css";
import { postLogin } from "../api";

class LoginPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "",
      password: ""
    };
  }
  genericOnChange(event) {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  }
  handleSubmit(event) {
    //submit login info to the backend
    event.preventDefault();
    postLogin(this.state).then(response => {
      console.log("log in", response.data);
      // use the method sent an a prop by app.js to update current user
      this.props.loginSuccess(response.data);
    });
  }

  render() {
    return this.props.currentUser ? (
      <Redirect to="/form" />
    ) : (
      <section className="LoginPage">
        <h2>Log In</h2>
        <form onSubmit={event => this.handleSubmit(event)}>
          <label>
            Email:{" "}
            <input
              onChange={event => this.genericOnChange(event)}
              value={this.state.email}
              name="username"
              type="email"
              placeholder="Mon Email"
            />
          </label>

          <label>
            Mot de Passe:{" "}
            <input
              onChange={event => {
                this.genericOnChange(event);
              }}
              value={this.state.password}
              name="password"
              type="password"
              placeholder="Mot de passe"
            />
          </label>
          <button>Se connecter</button>
        </form>
      </section>
    );
  }
}

export default LoginPage;
