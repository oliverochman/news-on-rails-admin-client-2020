import React from "react";
import ArticlePage from "./components/ArticlePage";
import { Header, Icon } from "semantic-ui-react";
import Login from "./components/Login";
import { connect } from "react-redux";
import CreateArticle from "./components/CreateArticle";

const App = (props) => {
  let journalistContent, editorContent, login

  if (props.userRole == 'journalist') {
    journalistContent = (
      <>
        <ArticlePage />
        <CreateArticle />
      </>
    )
  } else if (props.userRole == 'editor') {
    editorContent = (
      <>
        <ArticlePage />
      </>
    )
  } else {
    login = <Login />
  }

  return (
    <>
      <Header as="h1" icon textAlign="center">
        <Icon name="train" circular />
        News on Rails
      </Header>
      
      {login}
      {editorContent}
      {journalistContent}
      
      {props.userEmail && (
        <p>Hey {props.userEmail}, have a productive day!</p>
      )}    
    </>
  );
};

const mapStateToProps = (state) => {
  return {
    userRole: state.currentUser.role,
    userEmail: state.currentUser.email
  };
};

export default connect(mapStateToProps)(App);