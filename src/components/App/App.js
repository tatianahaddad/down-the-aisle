import Nav from "../Nav/Nav";
import { Switch, Route } from "react-router-dom";
import Login from "../Login/Login";
import Register from "../Register/Register";
import ArticlesListPage from "../ArticlesListPage/ArticlesListPage";
import PublicOnlyRoute from "../../Utils/PublicOnlyRoute";
import PrivateRoute from "../../Utils/PrivateRoute";
import NotFoundPage from "../NotFoundPage/NotFoundPage";
import ArticlePage from "../ArticlePage/ArticlePage";
import Footer from '../Footer/Footer'
import "./App.css";
import LandingPage from '../LandingPage/LandingPage'
import { tsConstructorType } from "@babel/types";
import ArticleApiService from '../../services/article-api-service'

import React, { Component } from 'react'

export class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      articles : {}
    };
  }

  componentDidMount() {
    ArticleApiService.getArticles()
    .then(data => {
      const articles = data;
      this.setState({
        articles: articles
      })
    })
    .catch(err => {
      this.setState({
        error: err.message
      })
    })
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
          <Route exact path={"/"} component={LandingPage} />
          <Route path={"/articles"} component={ArticlesListPage} />
          <PublicOnlyRoute path={"/login"} component={Login} />
          <PublicOnlyRoute
              path={'/register'}
              component={Register}
            />
        </Switch>
      </main>
      <Footer />
    </div>
    )
  }
}

export default App

