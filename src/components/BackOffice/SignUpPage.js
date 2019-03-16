import React, { Component } from "react";

import "./SignUpPage.css";
import { postSignUp } from "../../api.js";

class SignupPage extends Component {
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
    event.preventDefault();
    postSignUp(this.state).then(response => {
      console.log("sign up result", response.data);
      // use the method sent an a prop by app.js to update current user
      this.props.signupSuccess(response.data);
    });
  }
  render() {
    const { currentUser } = this.props;

    return (
      <section className="SignupPage">
        {currentUser ? (
          <div className="card bg-light">
            <article className="card-body mx-auto">
              <h4 className="card-title mt-3 text-center">
                Your account has been created
              </h4>
            </article>
          </div>
        ) : (
          <div className="card bg-light">
            <article className="card-body mx-auto">
              <h4 className="card-title mt-3 text-center">Create Account</h4>
              <p className="text-center">Get started with your pro account </p>
              <br />
              <form onSubmit={event => this.handleSubmit(event)}>
                <div className="form-group input-group">
                  <div className="input-group-prepend" />

                  <div className="form-group input-group">
                    <div className="input-group-prepend">
                      <span className="input-group-text">
                        {" "}
                        <i className="fa fa-envelope" />{" "}
                      </span>
                    </div>
                    <input
                      onChange={event => {
                        this.genericOnChange(event);
                      }}
                      value={this.state.email}
                      name="username"
                      className="form-control"
                      placeholder="Email address"
                      type="email"
                    />
                  </div>

                  <div className="form-group input-group">
                    <div className="input-group-prepend">
                      <span className="input-group-text">
                        {" "}
                        <i className="fa fa-building" />{" "}
                      </span>
                    </div>
                    <select className="form-control">
                      <option selected=""> Select role type</option>
                      <option>Fleet Manager</option>
                      <option>Administrative</option>
                      <option>Nursing/Medical</option>
                    </select>
                  </div>

                  <div className="form-group input-group">
                    <div className="input-group-prepend">
                      <span className="input-group-text">
                        {" "}
                        <i className="fa fa-lock" />{" "}
                      </span>
                    </div>
                    <input
                      className="form-control"
                      placeholder="Create password"
                      type="password"
                      name="password"
                    />
                  </div>

                  <div className="form-group input-group">
                    <div className="input-group-prepend">
                      <span className="input-group-text">
                        {" "}
                        <i className="fa fa-lock" />{" "}
                      </span>
                    </div>
                    <input
                      onChange={event => {
                        this.genericOnChange(event);
                      }}
                      value={this.state.password}
                      s
                      className="form-control"
                      placeholder="Repeat password"
                      type="password"
                      name="password"
                    />
                  </div>

                  <div className="form-group">
                    <button type="submit" className="btn btn-primary btn-block">
                      {" "}
                      Create Account{" "}
                    </button>
                  </div>
                </div>

                <p className="text-center">
                  Have an account? <a href="/login">Log In</a>{" "}
                </p>
              </form>
            </article>
          </div>
        )}
      </section>
    );
  }
}

export default SignupPage;
