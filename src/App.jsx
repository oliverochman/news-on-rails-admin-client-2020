import React, { Component } from "react";
import ArticlePage from "./components/ArticlePage";
import { Header, Icon } from "semantic-ui-react"
import Login from "./components/Login"

class App extends Component {
  state = {
    authenticated: false
  }

  render() {
    let login
    this.state.authenticated?(
      login = (
        <p id="login-message">You are currently logged in as {JSON.parse(sessionStorage.getItem("credentials")).uid}</p>
      )
    ):(
      login = (
        <Login setAuthenticated={() => this.setState({authenticated: true})} />
      )
    )
    return (
      <>
      <Header as='h1' icon textAlign='center'>
        <Icon name='train' circular/>
        News on Rails  
      </Header>
      <div>
        {login}
      </div>
        <div>
          <ArticlePage />
        </div>
      </>
    );
  }
}

export default App;
