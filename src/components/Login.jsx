import React, { Component } from "react";
import LoginForm from "./LoginForm";
import auth from "../modules/auth";
import { connect } from "react-redux";

class Login extends Component {
  state = {
    renderForm: false,
  };

  authenticate = async (event) => {
    event.preventDefault();
    try {
      let response = await auth.signIn(
        event.target.email.value,
        event.target.password.value
      );
      this.props.dispatch({
        type: "AUTHENTICATE",
        payload: {
          currentUser: { email: response.data.email, role: response.data.role },
        },
      });
    } catch (error) {
      console.log(error);
    }
  };

  render() {
    let loginForm, loginButton, loginMessage;

    this.state.renderForm
      ? (loginForm = <LoginForm authenticate={this.authenticate} />)
      : (loginButton = (
          <button
            id="login"
            onClick={() => this.setState({ renderForm: true })}
          >
            Login
          </button>
        ));

    return (
      <div>
        {loginForm}
        {loginButton}
        {loginMessage}
      </div>
    );
  }
}
const mapStateToProps = (state) => {
  return { userEmail: state.currentUser.email, authenticated: state.authenticated };
};

export default connect(mapStateToProps)(Login);
