import React from "react";
import Nav from "./nav/nav";
import { Switch, Route } from "react-router-dom";
import Login from "./Login/Login";
import Register from "./Register/Register";
import ArticlesListPage from "./ArticlesListPage/ArticlesListPage";
import PublicOnlyRoute from "./Utils/PublicOnlyRoute";
import PrivateRoute from "./Utils/PrivateRoute";
import NotFoundPage from "./NotFoundPage/NotFoundPage";
import ArticlePage from "./ArticlePage/ArticlePage";
import Footer from './Footer/Footer'
import "./App.css";

function App() {
  return (
    <div className="App">
      <header className="header">
        <Nav />
      </header>
      <main>
        <Switch>
          <Route exact path={"/"} component={ArticlesListPage} />
          <PublicOnlyRoute path={"/login"} component={Login} />
          <PublicOnlyRoute
              path={'/register'}
              component={Register}
            />
        </Switch>
      </main>
      <Footer />
    </div>
  );
}

export default App;
