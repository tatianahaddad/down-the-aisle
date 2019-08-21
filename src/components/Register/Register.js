import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./Register.css";

export default class Register extends Component {
  render() {
    return (
      <form>
        <div className="register-containter">
          <h2 className="sign-up">Sign Up</h2>
          <label htmlFor="first-name">
            <b>First Name</b>
          </label>
          <input
            className="register-input"
            type="text"
            placeholder="Jane"
            name="first-name"
            required
          />
          <label htmlFor="last-name">
            <b>Last Name</b>
          </label>
          <input
            className="register-input"
            type="text"
            placeholder="Doe"
            name="last-name"
            required
          />
          <label htmlFor="email">
            <b>Email</b>
          </label>
          <input
            className="register-input"
            type="text"
            placeholder="janedoe@janedoe.com"
            name="email"
            required
          />
          <label htmlFor="username">
            <b>User Name</b>
          </label>
          <input
            className="register-input"
            type="text"
            placeholder="jdoe"
            name="username"
            required
          />
          <label htmlFor="psw">
            <b>Password</b>
          </label>
          <input
            className="register-input"
            type="password"
            placeholder="Enter Password"
            name="psw"
            required
          />
          <div className="button-container">
            <button className="join-button">Join Now!</button>
            <p className="already-reg">
              Already registered? <Link to="/login">Sign in</Link>
            </p>
          </div>
        </div>
      </form>
    );
  }
}
