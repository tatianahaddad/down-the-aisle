import React, { Component } from "react";
import "./LandingPage.css";
import { Link } from "react-router-dom";

export class LandingPage extends Component {
  render() {
    return (
      <div className="landing-container">
        <h1 className="main-title">Down the Aisle</h1>
        <div className="centering">
          <div className="statement-bubbles">
            <p className="headline">ALL THE NEWS </p>
            <p className="border" />
            <p className="landing-content">
              Catch up instantly on the top news stories sweeping the nation.
            </p>
          </div>
          <div className="statement-bubbles">
            <p className="headline">ALL THE SOURCES</p>
            <p className="border" />
            <p className="landing-content">
              Receive all the headlines from accredited resources across all
              political spectrums.
            </p>
          </div>
          <div className="statement-bubbles">
            <p className="headline">EVERY SIDE</p>
            <p className="border" />
            <p className="landing-content">
              Like, comment, and join in on constructive discussion. No bias,
              just news. You decide.
            </p>
          </div>
        </div>
        <button className="lets-go">
          <Link to="/register" className="started">
            Get started!
          </Link>
        </button>
      </div>
    );
  }
}

export default LandingPage;
