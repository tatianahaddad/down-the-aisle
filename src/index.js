import React from "react";
import ReactDOM from "react-dom";
import App from "./components/App/App";
import "./index.css";
import { BrowserRouter } from "react-router-dom";
import { ArticlesProvider } from "../src/context/ArticlesContext";

ReactDOM.render(
  <BrowserRouter>
    <ArticlesProvider>
      <App />
    </ArticlesProvider>
  </BrowserRouter>,
  document.getElementById("root")
);
