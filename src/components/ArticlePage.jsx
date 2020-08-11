import React, { Component } from "react";
import CreateArticle from "./CreateArticle";
import { Button } from 'semantic-ui-react';

class ArticlePage extends Component {
  state = {
    renderForm: false,
  };

  render() {
    let button;
    let form;

    this.state.renderForm
      ? (form = <CreateArticle authenticate={this.authenticate} />)
      : (button = (
          <Button
            id="create-article"
            onClick={() => this.setState({ renderForm: true })}
          >
            Create Article
          </Button>
        ));
    return (
      <div>
        {button}
        {form}
      </div>
    );
  }
}

export default ArticlePage;
