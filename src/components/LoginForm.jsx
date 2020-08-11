import React from "react";
import { Button, Form } from 'semantic-ui-react'

const LoginForm = (props) => {
  return (
    <Form onSubmit={props.authenticate} id="login-form">
      <lable id="label">Email</lable>
      <input name="name" type="email" id="email" />
      <label id="label">Password</label>
      <input name="password" type="password" id="password" />
      <Button id="submit">Login</Button>
    </Form>
  );
};

export default LoginForm;
