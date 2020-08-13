import React, { Component } from "react";
import ArticlePage from "./components/ArticlePage";
import { Header, Icon } from "semantic-ui-react"

class App extends Component {
  render() {
    return (
      <>
      <Header as='h1' icon textAlign='center'>
        <Icon name='train' circular/>
        News on Rails  
      </Header>
        <div>
          <ArticlePage />
        </div>
      </>
    );
  }
}

export default App;
