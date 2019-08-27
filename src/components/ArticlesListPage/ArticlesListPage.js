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
      isHidden: true,
      commentClicked: false
    };
  }


  commentButton() {
    this.setState({
      commentClicked: !this.state.commentClicked
    })
    console.log('comment button clicked')
  }

  articles() {
    return (this.props.articles)
    .map(article => {
      return <div className="articles-container">
      <a href={article.url} target="_blank" rel="noopener noreferrer"><div className="temp-image">
      <img src={article.urlToImage} alt="global news" className="news-image" />
      </div></a>
      {!this.state.isHidden && article.content }
      <div className="temp-text" >
        <p className="article-source">{article.source.name}: {article.author}</p>
        <p className="article-description">{article.description}</p>
      </div>
      <div className="like-comment">
        <button className="interactive-button" onClick={this.updateLikes}>
          Like
        </button>
        <p className="likes-counter">{this.state.likes} likes</p>
        <button className="interactive-button" onClick={this.commentButton.bind(this)}>Comments</button>
      </div>
      <div>{!this.state.commentClicked && <textarea className="comment"required="" aria-label="Type a comment..." name="text" id="text" cols="30" rows="3" placeholder="Type a comment.."></textarea>}</div>
      {!this.state.commentClicked && <button className="comment-submit" type="submit">Post comment</button>}
    </div>
    });
  }

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
