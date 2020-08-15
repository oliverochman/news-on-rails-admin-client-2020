import React from "react";
import { Button, Form, Grid, Segment } from 'semantic-ui-react'

const LoginForm = (props) => {
  return (
    <Segment placeholder>
      <h3 id='portal' >Admin Portal</h3>
      <Grid columns={1} relaxed='very' stackable>
        <Grid.Column>
          <Form onSubmit={props.authenticate} id="login-form">
            <Form.Input
              id="email"
              icon='user'
              iconPosition='left'
              label='Email'
              placeholder='Email'
            />
            <Form.Input
              id="password"
              icon='lock'
              iconPosition='left'
              label='Password'
              placeholder='Password'
              type='password'
            />
            <Button content='Login' id="login-button" primary/>
          </Form>
        </Grid.Column>
      </Grid>
    </Segment>
  );
};

export default LoginForm;