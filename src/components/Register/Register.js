import React, { Component } from "react";
import { Link } from "react-router-dom";
import { withRouter } from "react-router-dom";
import "./Register.css";
import AuthApiService from '../../services/auth-api-services'

export class Register extends Component {
  constructor(props) {
    super(props);
    this.useDemo = this.useDemo.bind(this);
  }

  static defaultProps = {
    onRegistrationSuccess: () => {}
  }

  state = { error: null }

  handleSubmit = ev => {
    ev.preventDefault()
    const { full_name, user_name, password } = ev.target
    this.setState({ error: null })
    AuthApiService.postUser({
      user_name: user_name.value,
      password: password.value,
      full_name: full_name.value,
    })
      .then(user => {
        full_name.value = ''
        user_name.value = ''
        password.value = ''
        this.props.onRegistrationSuccess()
      })
      .catch(res => {
        this.setState({ error: res.error })
      })
  }

  useDemo(e) {
    e.preventDefault();
    this.props.history.push("/articles");
  }

  loginButton() {
    if (this.props.userToken) {
      this.props.history.push("/articles")
    }
  }

  render() {
    const { error } = this.state
    return (
      <form onSubmit={this.handleSubmit}>
        <div role='alert'>
          {error && <p className='red'>{error}</p>}
        </div>
        <div className="register-containter">
          <h2 className="sign-up">Sign Up</h2>
          <label htmlFor="full-name">
            <b>Full Name</b>
          </label>
          <input
            className="register-input"
            type="text"
            placeholder="Jane Doe"
            name="full-name"
            id='full_name'
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
            id='user_name'
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
            id='password'
            required
          />
          <div className="button-container">
            <button className="join-button" onClick={this.loginButton.bind(this)}>Join Now!</button>
            <button className="join-button" onClick={this.useDemo}>Use demo account</button>
            <p className="already-reg">
              Already registered? <Link to="/login">Sign in</Link>
            </p>
          </div>
        </div>
      </form>
    );
  }
}

export default withRouter(Register);