import React, { Component } from "react";
import axios from "axios";
import { Form, Button, Select, TextArea, Input } from "semantic-ui-react";

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
    let { title, lead, content, category, image } = event.target;

    try {
      articleParams = {
        title: title.value,
        lead: lead.value,
        content: content.value,
        category: category.value,
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

  render() {
    return (
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
            <Form.Field
              control={Select}
              options={categoryOptions}
              label={{
                children: "Category",
                htmlFor: "form-select-control-category",
              }}
              placeholder="Category"
              id="category"
              name="category"
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
        {this.state.message && <p id="message">{this.state.message}</p>}
        </Form>
    );
  }
}

export default CreateArticle;
