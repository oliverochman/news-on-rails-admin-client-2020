import React, { Component } from "react";
import CreateArticle from "./CreateArticle";
import { Button, Container } from "semantic-ui-react";
import { connect } from "react-redux";

class ArticlePage extends Component {
  state = {
    renderForm: false,
  };

  render() {
    let button, form, loginMessage;

    this.state.renderForm
      ? (form = <CreateArticle />)
      : (button = (
          <Button
            id="create-article"
            onClick={() => this.setState({ renderForm: true })}
          >
            Create Article
          </Button>
        ));
    this.props.authenticated &&
      (loginMessage = (
        <p>Hello {this.props.userEmail}, have a productive day!</p>
      ));

    return (
      <>
      <div>
        {loginMessage}
      </div>
        <Container>
          {form}
          {button}
        </Container>
      </>
    );
  }
}
const mapStateToProps = (state) => {
  return {
    authenticated: state.authenticated,
    userRole: state.currentUser.role,
    userEmail: state.currentUser.email
  };
};
export default connect(mapStateToProps)(ArticlePage);
