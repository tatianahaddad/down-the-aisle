import React, { Component } from "react";
import "./ArticlesListPage.css";
import news from "../images/local-news.png";
//import news from "..../images/local-news.png";

export class ArticlesListPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      likes: [],
      updated: false
    };
  }

  handleLikes = () => {
    console.log("clicked");
  };

  updateLikes = () => {
    /*if (this.state.likes === 1) {
      return 
    }*/
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
        <h2 className="top-stories"></h2>
        <div className="articles-container">
          <div className="temp-image">
            <img src={news} alt="local news" className="news-image" />
          </div>
          <div className="temp-text">
            <p>
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua."
            </p>
          </div>
          <div className="like-comment">
            <button className="interactive-button" onClick={this.updateLikes}>
              Like
            </button>
            <p className="likes-counter">{this.state.likes} likes</p>
            <button className="interactive-button">Comment</button>
          </div>
        </div>
        <div className="articles-container">
          <div className="temp-image">
            <img src={news} alt="local news" className="news-image" />
          </div>
          <div className="temp-text">
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua."
            </p>
          </div>
          <div className="like-comment">
            <button className="interactive-button" onClick={this.updateLikes}>
              Like
            </button>
            <p className="likes-counter">{this.state.likes} likes</p>
            <button className="interactive-button">Comment</button>
          </div>
        </div>
        <div className="articles-container">
          <div className="temp-image">
            <img src={news} alt="local news" className="news-image" />
          </div>
          <div className="temp-text">
            <p>
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua."
            </p>
          </div>
          <div className="like-comment">
            <button className="interactive-button" onClick={this.updateLikes}>
              Like
            </button>
            <p className="likes-counter">{this.state.likes} likes</p>
            <button className="interactive-button">Comment</button>
          </div>
        </div>
      </div>
    );
  }
}

export default ArticlesListPage;
