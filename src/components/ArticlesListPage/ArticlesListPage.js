import React, { Component } from "react";
import "./ArticlesListPage.css";
import ArticlePage from '../ArticlePage/ArticlePage';
import {Link} from 'react-router-dom';
//import Pusher from 'pusher-js/react-native';


export class ArticlesListPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      likes: [],
      updated: false,
      isHidden: true
    };
  }

  clickForMore() {
    this.setState({
      isHidden: !this.state.isHidden
    })
      console.log('this was clicked')
    }

  articles() {
    return (this.props.articles)
    .map(article => {
      return <div className="articles-container">
      <button className="temp-image" onClick={this.clickForMore.bind(this)}>
      <img src={article.urlToImage} alt="global news" className="news-image" />
      </button>
      {!this.state.isHidden && article.content }
      <div className="temp-text" >
        <a href={article.url} target="_blank" rel="noopener noreferrer"><p>{article.source.name}: {article.author}</p></a>
        <p>{article.description}</p>
      </div>
      <div className="like-comment">
        <button className="interactive-button" onClick={this.updateLikes}>
          Like
        </button>
        <p className="likes-counter">{this.state.likes} likes</p>
        <button className="interactive-button">Comment</button>
      </div>
    </div>
    });
  }

  /*componentDidMount() {
    ArticleApiService.getArticles()
    .then(console.log('ran'))
  }*/

  handleLikes = () => {
    console.log("clicked");
  };

  updateLikes = () => {
    if (!this.state.updated) {
      this.setState((prevState, props) => {
        return {
          likes: prevState.likes + 1,
          updated: true
        };
      });
    } else {
      this.setState((prevState, props) => {
        return {
          likes: prevState.likes - 1,
          updated: false
        };
      });
    }
  };

  render() {
    return (
      <div>
        <h1 className="title">Today's top stories</h1>
        {this.articles()}
      </div>
    );
  }
}

export default ArticlesListPage;
