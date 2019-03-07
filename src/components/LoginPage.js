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
                <span className="text-info small">&nbsp;Pro</span>
              </h1>
            </div>
            <div className="row">
              {/* illustration */}
              <div className="col-md-8  order-first order-md-5 mt-5">
                <img
                  src="/images/illustrations/undraw_authentication_fsn5.svg"
                  alt="Illustration calme et apaisante de deux docteurs dans un hopital"
                  className="img-fluid"
                />
              </div>
              {/* speech and CTA */}
              <div className="col-lg-4 py-4 pr-0">
                <form
                  onSubmit={event => this.handleSubmit(event)}
                  className="text-center border border-light p-5"
                >
                  <p classame="h4 mb-4">Portal Log In</p>

                  <input
                    type="username"
                    name="username"
                    className="form-control mb-4"
                    aria-describedby="emailHelp"
                    onChange={event => {
                      this.genericOnChange(event);
                    }}
                    value={this.state.username || ""}
                    placeholder="E-mail "
                  />
                  <input
                    type="password"
                    name="password"
                    className="form-control mb-4"
                    aria-describedby="passwordHelp"
                    onChange={event => {
                      this.genericOnChange(event);
                    }}
                    value={this.state.password || ""}
                    placeholder="Password "
                  />
                  <div className="d-flex justify-content-around">
                    <div className="custom-control custom-checkbox">
                      <input type="checkbox" className="custom-control-input" />
                      <label className="custom-control-label">
                        Remember me
                      </label>
                    </div>
                  </div>
                  <button className="btn btn-info btn-block my-4" type="submit">
                    Sign in
                  </button>

                  <p>
                    Not a member? &nbsp;
                    <a href="/signup">Create a profile</a>
                  </p>
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
