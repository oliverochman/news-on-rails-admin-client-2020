import React from 'react'
import { Container, Grid } from "semantic-ui-react"
import { useSelector } from "react-redux";



const ArticleContent = (props) => {
  let publishArticle
  const userRole = useSelector(state => state.currentUser.role)

  if (userRole == 'editor') {
    publishArticle = <button id="publish-article" onClick={props.publishArticle}>Publish article</button>
  }
  return (
    <div className="article-list">
      <Container>
        <Grid columns={3} divided>
          <div id={`article-${props.article.id}`} data-id={props.article.id}>
            <h1 id="title">{props.article.title}</h1>
            <h2 id="lead">{props.article.lead}</h2>
            {props.singleArticle ? (
              <>
                <h2 id="content">{props.article.content}</h2>
                <h2 id="category">{props.article.category}</h2>
                <img src={props.article.image} alt='article' />
                {publishArticle}
                <button onClick={props.closeSingleArticle}>Close article</button>
              </>
            ) : (
              <button id="view-article" onClick={props.getSingleArticle}>View Article</button>
            )}
          </div>
        </Grid>
      </Container>
    </div>
  )
}
export default ArticleContent;