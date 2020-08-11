import React, { Component } from 'react'
import CreateArticle from "./CreateArticle"

class ArticlePage extends Component {
  state = {
    renderForm: false
  }

  render() {
    let button
    let form

    this.state.renderForm ? (
      form = <CreateArticle authenticate={this.authenticate} />
    ) : (
      button = <button id="create-article" onClick={() => this.setState({ renderForm: true })}>Create Article</button>
    )
    return (
      <div>
        {button}
        {form}
      </div>
    )
  }
}

export default ArticlePage