import React, { Component } from "react";
import './LandingPage.css'
import { Link } from 'react-router-dom'

export class LandingPage extends Component {
  render() {
    return (
      <div className="landing-container">
        <h1 className="main-title">Down the Aisle</h1>
        <div className="landing-inner-containter">
          <h2 className="news">All News.</h2>
          <h2 className="sides">All Sides.</h2>
        </div>
        <div className="statement-container">
          <p className="main-statement">
            Down the Aisle presents a balanced news perspective. Search for a
            topic of interest to get articles detailing the most up-to-date
            information presented by all credible sources.
          </p>
        </div>
        <button className="start-button"><Link to="/articles" className="started">Click here to get started!</Link></button>
      </div>
    );
  }
}

export default LandingPage;
