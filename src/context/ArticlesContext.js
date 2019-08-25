import React, { Component } from 'react'
import ArticleApiService from '../services/article-api-service'

export const articles= {
  article : ArticleApiService.getArticles()
  .then(data => {
    const articles = data;
  })
}

const ArticleContext = React.createContext({
  articles: articles
})

export default ArticleContext

export class ArticlesProvider extends Component {
  state = {
    articles: articles
  };

  render() {
    const value = {
      article: this.state.article,
    }
    return (
      <ArticleContext.Provider value={value}>
        {this.props.children}
      </ArticleContext.Provider>
    )
  }
}
