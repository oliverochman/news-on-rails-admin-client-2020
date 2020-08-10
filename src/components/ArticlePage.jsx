import React, { Component } from 'react'

class ArticlePage extends Component {
  render() {
  
      {this.props.authenticated && (
      <button id="create-article">Create Article</button>
      )}
  
    return (
      <div>
      </div>
    )
  }
}

export default ArticlePage