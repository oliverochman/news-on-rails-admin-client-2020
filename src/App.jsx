import React, { Component } from 'react';
import Login from './components/Login';
import ArticlePage from './components/ArticlePage';
class App extends Component {
  state = {
    authenticated: false

  }
  render() {
    let login
    this.state.authenticated?(
      login = (
      <p id="loginMessage">You are currently logged in as {JSON.parse(sessionStorage.getItem("credentials")).uid}</p>
      )
    ):(
      login = (
        <Login setAuthenticated={() => this.setState({authenticated: true})}/>
      )
    )
  return (
    <>
    <div>
      {login}
    </div>
    <div>
      <ArticlePage authenticated={this.state.authenticated}/>
    </div>
    </>
  );
  }
}

export default App;
