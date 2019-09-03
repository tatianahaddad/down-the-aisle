import Nav from "../Nav/Nav";
import { Switch, Route } from "react-router-dom";
import Login from "../Login/Login";
import Register from "../Register/Register";
import ArticlesListPage from "../ArticlesListPage/ArticlesListPage";
import PublicOnlyRoute from "../../Utils/PublicOnlyRoute";
import PrivateRoute from "../../Utils/PrivateRoute";
import NotFoundPage from "../NotFoundPage/NotFoundPage";
import Footer from "../Footer/Footer";
import "./App.css";
import LandingPage from "../LandingPage/LandingPage";
import { tsConstructorType } from "@babel/types";
import ArticleApiService from "../../services/article-api-service";
import TokenService from '../../services/token-service'

import React, { Component } from "react";

export class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      articles: [],
      userToken: TokenService.getAuthToken() || ""
    };
  }

  componentDidMount() {
    ArticleApiService.getArticles()
      .then(data => {
        const articles = data;
        this.setState({
          articles: articles.articles
        });
      })
      .catch(err => {
        this.setState({
          error: err.message
        });
      });
  }

  /*componentDidMount() {
      ArticleApiService.getArticles()
      .then(data => {
        const articles = data
        this.setState({
          articles: articles
        })
        //console.log(data)
      }

    }*/

  render() {
    return (
      <div className="App">
        <header className="header">
          <Nav />
        </header>
        <main>
          <Switch>
            <Route exact path={"/"} component={LandingPage} />} />
            <Route
              path={"/articles"}
              render={() => <ArticlesListPage userToken={this.state.userToken} articles={this.state.articles} />}
            />
            <Route path={"/login"} render={() => <Login userToken={this.state.userToken} />} />
            <Route path={"/register"} render={() => <Register userToken={this.state.userToken} />} />
          </Switch>
        </main>
        <Footer />
      </div>
    );
  }
}

export default App;
