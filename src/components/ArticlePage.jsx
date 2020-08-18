import React, { useState, useEffect } from "react";
import axios from "axios";
import ArticleContent from "./ArticleContent"
import { useSelector } from "react-redux";

const ArticlePage = () => {
  const [articles, setArticles] = useState([])
  const [singleArticle, setSingleArticle] = useState(null)
  const [message, setMessage] = useState(null)
  const userRole = useSelector(state => state.currentUser.role)

  useEffect(() => {
    getArticles()
  }, [])


  const getArticles = async () => {
    let response;
    if (userRole == 'editor') {
      response = await axios.get("/articles", {
        params: {
          published: false
        }
      })
    } else {
      response = await axios.get("/articles")
    }
    setArticles(response.data.articles);
  };

  const getSingleArticle = async (event) => {
    let id = event.target.parentElement.dataset.id;
    let response = await axios.get(`/articles/${id}`);
    setSingleArticle(response.data.article);
  };

  const closeSingleArticle = () => {
    setSingleArticle(null);
  };

  const publishArticle = async () => {
    try {
      const headers = JSON.parse(localStorage.getItem("J-tockAuth-Storage"));
      let id = singleArticle.id
      let response = await axios.put(`/articles/${id}`, {
        publish: true
      }, {
        headers: headers
      })

      setSingleArticle(null)
      setMessage(response.data.message)
      getArticles()
    } catch (error) {
      console.log(error)
    }
  }

  let button, form, content;
 
  if (singleArticle) {
    content = (
      <ArticleContent
        article={singleArticle}
        singleArticle={true}
        closeSingleArticle={closeSingleArticle}
        publishArticle={publishArticle}
      />
    );
  } else {
    content = articles.map((article) => (
      <ArticleContent
        article={article}
        singleArticle={false}
        getSingleArticle={getSingleArticle}
      />
    ));
  }

  return (
    <>
      {message && (
        <p id="message">{message}</p>
      )}
      {form}
      {button}
      <div className="articles">
        {content}
      </div>
    </>
  )
}

export default ArticlePage

