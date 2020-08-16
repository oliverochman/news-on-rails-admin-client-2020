import React, { Component } from "react";
import CreateArticle from "./CreateArticle";
import { Button, Container } from "semantic-ui-react";
import { connect } from "react-redux";
import axios from "axios";
import ArticleContent from "./ArticleContent"

class ArticlePage extends Component {
  state = {
    renderForm: false,
    articles: [],
    singleArticle: null,
  };

  componentDidMount = () => {
    this.getArticles();
  };

  getArticles = async () => {
    let response;
    response = await axios.get("/articles")
    this.setState({ articles: response.data.articles });
  };

  getSingleArticle = async (event) => {
    let id = event.target.parentElement.dataset.id;
    let response = await axios.get(`/articles/${id}`);
    this.setState({ singleArticle: response.data.article });
  };

  closeSingleArticle = () => {
    this.setState({
      singleArticle: null,
    });
  };

  render() {
    let button, form, loginMessage, articles;

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
        <p id="welcome">Hello {this.props.userEmail}, have a productive day!</p>
      ));

    if (this.state.singleArticle) {
      articles = (
        <ArticleContent
          article={this.state.singleArticle}
          singleArticle={true}
          closeSingleArticle={this.closeSingleArticle}
        />
      );
    } else {
      articles = this.state.articles.map((article) => (
        <ArticleContent
          article={article}
          singleArticle={false}
          closeSingleArticle={this.getSingleArticle}
        />
      ));
    }

    return (
      <>
        <div>{loginMessage}</div>
        <Container>
          {form}
          {button}
        </Container>
        <div>{articles}</div>
      </>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    authenticated: state.authenticated,
    userRole: state.currentUser.role,
    userEmail: state.currentUser.email,
  };
};

export default connect(mapStateToProps)(ArticlePage);
