import React, { Component } from "react";
import axios from "axios";
import { Form, Button, TextArea, Input } from "semantic-ui-react";

const categoryOptions = [
  { key: "c", text: "Culture", value: "culture" },
  { key: "e", text: "Economy", value: "economy" },
  { key: "i", text: "International", value: "international" },
  { key: "li", text: "Lifestyle", value: "lifestyle" },
  { key: "lo", text: "Local", value: "local" },
  { key: "s", text: "Sports", value: "sports" },
];

class CreateArticle extends Component {
  state = {
    selectedCategory: "",
    message: "",
  };

  toBase64 = (file) =>
    new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onload = () => resolve(reader.result);
      reader.onerror = (error) => reject(error);
    });

  submitArticle = async (event) => {
    event.preventDefault();
    let responseMessage, articleParams, encodedImage, response;
    let { title, lead, content, image } = event.target;
    
    try {
      articleParams = {
        title: title.value,
        lead: lead.value,
        content: content.value,
        category: this.state.selectedCategory,
      };

      if (image.files[0]) {
        encodedImage = await this.toBase64(image.files[0]);
        articleParams.image = encodedImage;
      }

      response = await axios.post(
        "http://localhost:3000/api/v1/articles",
        { article: articleParams },
        { headers: { "Content-Type": "application/json" } }
      );
        
      responseMessage = response.data.message;
    } catch (error) {
      responseMessage = response.data.error;
    } finally {
      this.setState({ message: responseMessage });
    }
  };

  handleCategoryChange = (value) => {
    this.setState({selectCategory: value})
  }

  render() {
    return (
      <>
        <Form onSubmit={this.submitArticle} id="article-form">
          <Form.Group widths="equal">
            <Form.Field
              control={Input}
              placeholder="Title"
              id="title"
              name="title"
              label="Title"
            />
            <Form.Field
              control={Input}
              placeholder="Lead"
              id="lead"
              name="lead"
              label="Lead"
            />
            <Form.Select
              onChange={(data) => {this.handleCategoryChange(data.value)}}
              options={categoryOptions}
              placeholder="Category"
              id="category"
              name="category"
              label="Category"
            />
          </Form.Group>
          <Form.Field
            control={TextArea}
            placeholder="Content"
            id="content"
            name="content"
            label="Content"
          />
          <Form.Group>
            <Input id="image-upload" name="image" type="file" />
          </Form.Group>

          <Button type="submit">Save Article</Button>
        </Form>
        {this.state.message && <p id="response-message">{this.state.message}</p>}
      </>
    );
  }
}

export default CreateArticle;
