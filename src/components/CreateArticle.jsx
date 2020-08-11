import React, { Component } from 'react'

class CreateArticle extends Component {

  submitArticle = async (event) => {
    event.preventDefault()
    let { title, lead, content, category } = event.target

    debugger
  }
  render() {
    return (
      <form onSubmit={this.submitArticle} id="article-form">
        <input placeholder="title" id="title" name="title" />
        <input placeholder="lead" id="lead" name="lead" />
        <input placeholder="content" id="content" name="content" />
        <input placeholder="image" id="image" name="image" type="file" />
        <input placeholder="cateogry" id="category" name="category" />
        <button type="submit">Submit Article</button>
      </form>
    )
  }
}

export default CreateArticle;