import React, { Component } from "react";
import ArticlePage from "./components/ArticlePage";

class App extends Component {
  state = {
    authenticated: false,
  };
  render() {
    return (
      <>
        <div>
          <ArticlePage />
        </div>
      </>
    );
  }
}

export default App;
