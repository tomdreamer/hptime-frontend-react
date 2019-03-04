import React, { Component } from "react";

import "./SignUpPage.css";
import { postSignUp } from "../api.js";

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
          <div>
            <h2>You are signed up !</h2>
          </div>
        ) : (
          <div>
            <h2>Sign Up</h2>
            <form onSubmit={event => this.handleSubmit(event)}>
              <label>
                Email :{" "}
                <input
                  onChange={event => {
                    this.genericOnChange(event);
                  }}
                  value={this.state.email}
                  type="email"
                  name="username"
                  placeholder="Mon Email"
                />
              </label>

              <label>
                Mot de passe :{" "}
                <input
                  onChange={event => {
                    this.genericOnChange(event);
                  }}
                  value={this.state.password}
                  type="password"
                  name="password"
                  placeholder="Mot de passe"
                />
              </label>

              <button>M'enregistrer</button>
            </form>
          </div>
        )}
      </section>
    );
  }
}

export default SignupPage;
