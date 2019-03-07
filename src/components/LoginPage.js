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
        <section className="bg-light">
          <div className="container">
            <div className="col-lg-12 pt-4">
              <h1 className="pt-4">
                <span className="text-primary display-4 ">Med</span>
                <span className="text-muted display-4 ">Direct</span>
                <span className="text-secondary small">
                  &nbsp;YardKeeper&reg;
                </span>
              </h1>
            </div>
            <div className="row">
              {/* illustration */}
              <div className="col-lg-8  order-first order-md-1">
                <img
                  src="/images/illustrations/undraw_authentication_fsn5.svg"
                  alt="Illustration calme et apaisante de deux docteurs dans un hopital"
                  className="img-fluid"
                />
              </div>
              {/* speech and CTA */}
              <div className="col-lg-4 py-4 pr-0">
                <p className="lead mb-3">Portal Log In</p>

                <form onSubmit={event => this.handleSubmit(event)}>
                  <label className="text-muted">
                    Email:{" "}
                    <input
                      onChange={event => this.genericOnChange(event)}
                      value={this.state.email}
                      name="username"
                      type="email"
                      placeholder="Mon Email"
                    />
                  </label>

                  <label className="text-muted">
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
              </div>
            </div>
          </div>
        </section>
      </section>
    );
  }
}

export default LoginPage;
