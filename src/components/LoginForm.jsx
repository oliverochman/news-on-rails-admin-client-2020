import React from "react";
import { Button, Form, Input } from "semantic-ui-react";

const LoginForm = (props) => {
  return (
    <Form onSubmit={props.authenticate} id="login-form">
			<Form.Group>
      <Form.Field inline>
				<label>Email:</label>
        <Input placeholder="Email" id="label" width={3}/>
			</Form.Field>
			<Form.Field inline>
				<label>Password:</label>
        <Input placeholder="Password" id="label" width={3}/>
      </Form.Field>
        <Button id="submit" widht={2} height={1}>Login</Button>
			</Form.Group>
    </Form>
  );
};

export default LoginForm;
