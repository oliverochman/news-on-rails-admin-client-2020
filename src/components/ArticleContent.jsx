import React from 'react'

const ArticleContent = (props) => {
  return (
    <div className="article-list">
      <div id={`article-${props.article.id}`} data-id={props.article.id}>
        <h1 id="title">{props.article.title}</h1>
        <h2 id="lead">{props.article.lead}</h2>
        {props.singleArticle ? (
          <>
            <p id="content">{props.article.content}</p>
            <button id="button" onClick={props.closeSingleArticle}>Close article</button>
          </>
        ) : (
            <button id="button" onClick={props.getSingleArticle}>Read more</button>
          )}
      </div>
    </div>
  )
}
export default ArticleContent;