import React from "react";

const LoginForm = (props) => {
  return (
    <form onSubmit={props.authenticate} id="login-form">
      <lable id="label">Email</lable>
      <input name="name" type="email" id="email" />
      <label id="label">Password</label>
      <input name="password" type="password" id="password" />
      <button id="login-button">Login</button>
    </form>
  );
};

export default LoginForm;