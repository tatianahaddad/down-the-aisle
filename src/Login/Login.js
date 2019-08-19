import React, { Component } from "react";
import "./Login.css";
import { Link } from "react-router-dom";

export class Login extends Component {
  render() {
    return (
      <div>
        <form>
          <div className="login-containter">
            <h2 className="sign-up">Login</h2>
            <label htmlFor="username">
              <b>User Name</b>
            </label>
            <input
              className="login-input"
              type="text"
              placeholder="jdoe"
              name="username"
              required
            />

            <label htmlFor="psw">
              <b>Password</b>
            </label>
            <input
              className="login-input"
              type="password"
              placeholder="Enter Password"
              name="psw"
              required
            />
            <div className="button-container">
              <button className="join-button">Sign in</button>
            </div>
          </div>
          <p className="already-reg">
            Need an account? <Link to="/register">Sign up</Link>
          </p>
        </form>
      </div>
    );
  }
}

export default Login;

/*<form>
    <div class= "containter">
      <h2 class="sign-up">Login</h2>

      <label for="username"><b>User Name</b></label>
      <input type="text" placeholder="jdoe" name="username" required>

      <label for="psw"><b>Password</b></label>
      <input type="password" placeholder="Enter Password" name="psw" required>
    </div>
    <button class="join-button">
      Sign in
    </button>
    <p class= "already-reg">Need an account? <a href>Sign up</a></p>
    </form>*/
