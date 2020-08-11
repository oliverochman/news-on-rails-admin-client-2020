import React, { Component } from "react";
import axios from "axios";

class CreateArticle extends Component {
  state = {
    message: ""
  }

  toBase64 = file => new Promise((resolve, reject) => {
    const reader = new FileReader()
    reader.readAsDataURL(file)
    reader.onload = () => resolve(reader.result)
    reader.onerror = error => reject(error)
  })

  submitArticle = async (event) => {
    event.preventDefault();
    let responseMessage, articleParams, encodedImage, response
    let { title, lead, content, category, image } = event.target;

    try {
      articleParams = {
        title: title.value,
        lead: lead.value,
        content: content.value,
        category: category.value
      }

      if (image.files[0]) {
        encodedImage = await this.toBase64(image.files[0])
        articleParams.image = encodedImage
      }

      response = await axios.post(
        "http://localhost:3000/api/v1/articles",
        { article: articleParams },
        { headers: { "Content-Type": "application/json"} }
      );

      responseMessage = response.data.message
    } catch(error) {
      responseMessage = response.data.error
    } finally {
      this.setState({ message: responseMessage })
    }
  };


  render() {
    return (
      <>
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
      {this.state.message && <p id="message">{this.state.message}</p>}
      </>
    );
  }
}

export default CreateArticle;
