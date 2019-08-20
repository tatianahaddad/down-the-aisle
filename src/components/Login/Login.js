import React, { Component } from "react";
import "./Login.css";
import { Link } from "react-router-dom";

export class Login extends Component {
  constructor(props) {
    super(props);
    this.useDemo = this.useDemo.bind(this); 
  }
  useDemo(e) {
    e.preventDefault()
    console.log('clicked')
    this.props.history.push('/articles')
  }
  render() {
    return (
      <div>
        <form className="whole-container">
          <div className="login-containter">
            <h2 className="sign-up">Login</h2>
            <label htmlFor="username">
              <b>User Name*</b>
            </label>
            <input
              className="login-input"
              type="text"
              placeholder="jdoe"
              name="username"
              required
            />

            <label htmlFor="psw">
              <b>Password*</b>
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
          <button onClick={this.useDemo}>Use demo account</button>
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
