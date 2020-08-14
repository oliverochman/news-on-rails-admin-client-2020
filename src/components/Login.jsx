import React, { Component } from "react";
import LoginForm from "./LoginForm";
import auth from "../modules/auth";
import axios from "axios";

class Login extends Component {
  state = {
    renderForm: false,
  };

  authenticate = async (event) => {
    event.preventDefault();
    try {
      let response = await auth.signIn(
        event.target.email.value,
        event.target.password.value,
      );
      this.props.setAuthenticated();
    } catch (error) {
      console.log(error);
    }
  };

  render() {
    let button;
    let form;

    this.state.renderForm
      ? (form = <LoginForm authenticate={this.authenticate} />)
      : (button = (
          <button
            id="login"
            onClick={() => this.setState({ renderForm: true })}
          >
            Login
          </button>
        ));
    return (
      <div>
        {button}
        {form}
      </div>
    );
  }
}

export default Login;
