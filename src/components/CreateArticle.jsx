import React, { Component } from "react";

class CreateArticle extends Component {
  submitArticle = async (event) => {
    event.preventDefault();
    let { title, lead, content, category } = event.target;

    debugger;
  };
  render() {
    return (
      <form onSubmit={this.submitArticle} id="article-form">
        <input placeholder="title" id="title" name="title" />
        <input placeholder="lead" id="lead" name="lead" />
        <input placeholder="content" id="content" name="content" />
        <input placeholder="image" id="image-upload" name="image" type="file" />
        <select
          placeholder="cateogry"
          id="category"
          name="category"
        >
          <option value="culture">Culture</option>
          <option value="economy">Economy</option>
          <option value="international">International</option>
          <option value="lifestyle">Lifestyle</option>
          <option value="local">Local</option>
          <option value="sports">Sports</option>
        </select>

        <button type="submit">Save Article</button>
      </form>
    );
  }
}

export default CreateArticle;
