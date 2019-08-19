import React, { Component } from "react";
import { Link } from "react-router-dom";
import TokenService from "../tokenService";
import "./nav.css";
import logo from '../images/news.png'

export class nav extends Component {
  render() {
    return (
      <div className="not-logged-in">
        <Link to="/" className="left"><img src={logo} alt="Down the Aisle Icon" class="icon"></img></Link>
        <Link to="/register" className="right">Register</Link>
        <Link to="/login" className="right">Log in</Link>
      </div>
    );
  }
}
/*handleLogoutClick = () => {
      TokenService.clearAuthToken()
    }
  
    renderLogoutLink() {
      return (
        <div className='Header__logged-in'>
          <Link
            onClick={this.handleLogoutClick}
            to='/'>
            Logout
          </Link>
        </div>
      )
    }
  
    renderLoginLink() {
      return (
        <div className='Header__not-logged-in'>
          <Link
            to='/register'>
            Register
          </Link>
          <Link
            to='/login'>
            Log in
          </Link>
        </div>
      )
    }
  
    render() {
      return (
        <nav className='Header'>
          <h1>
            <Link to='/'>
              Down the Aisle
            </Link>
          </h1>
          {TokenService.hasAuthToken()
            ? this.renderLogoutLink()
            : this.renderLoginLink()}
        </nav>
      )
    }
  }*/

export default nav;
