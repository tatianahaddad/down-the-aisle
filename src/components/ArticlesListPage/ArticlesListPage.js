import React, { Component } from "react";
//import Pusher from 'pusher-js/react-native';
import CommentForm from "../CommentForm/CommentForm";
import { withRouter } from "react-router-dom";
import message from "../images/message-bubble.png";
import "./ArticlesListPage.css";

export class ArticlesListPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      likes: [],
      updated: false,
      isHidden: true,
      showComment: false
    };
  }

  commentButton() {
    if (this.props.userToken) {
      this.setState({
        showComment: !this.state.showComment
      });
    } else this.props.history.push("/login");
  }

  articles() {
    return this.props.articles.map((article, index) => {
      return (
        <div className="articles-container" key={index}>
          <a href={article.url} target="_blank" rel="noopener noreferrer">
            <div className="temp-image">
              <img
                src={article.urlToImage}
                alt="global news"
                className="news-image"
              />
            </div>
          </a>
          {!this.state.isHidden && article.content}
          <div className="temp-text">
            <p className="article-source">
              {article.source.name}: {article.author}
            </p>
            <p className="article-description">{article.description}</p>
          </div>
          
            <button
              className="interactive-button"
              onClick={this.commentButton.bind(this)}
            >
              <img src={message} alt="message icon" />
            </button>
            <div>
              {this.state.showComment && <CommentForm articles={article} />}
            </div>
        </div>
      );
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
        <h1 className="title">Today's Top Stories</h1>
        {this.articles()}
      </div>
    );
  }
}

export default withRouter(ArticlesListPage);
