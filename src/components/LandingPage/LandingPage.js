import React, { Component } from "react";
import './LandingPage.css'
import { Link } from 'react-router-dom'

export class LandingPage extends Component {
  render() {
    return (
      <div className="landing-container">
        <h1 className="main-title">Down the Aisle</h1>
        <div className="statement-container">
          <p className="main-statement">
            Down the Aisle presents a balanced news perspective. Catch up on today's top news articles from accredited sources. Users can like and comment to join in on the discussion and share their insight on a story.
          </p>
        </div>
        <button className="lets-go"><Link to="/articles" className="started">Click here to get started!</Link></button>
      </div>
    );
  }
}

export default LandingPage;
