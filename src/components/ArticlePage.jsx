import React, { Component } from "react";
import CreateArticle from "./CreateArticle";
import { Button, Container } from "semantic-ui-react";

class ArticlePage extends Component {
  state = {
    renderForm: false,
  };

  render() {
    let button, form;

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

    return (
      <>
        <Container>
          {form}
          {button}
        </Container>
      </>
    );
  }
}

export default ArticlePage;
