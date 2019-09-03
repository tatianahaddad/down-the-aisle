import React, { Component } from "react";
import AuthApiService from "../../services/auth-api-services";
import TokenService from "../../services/token-service";
import { withRouter } from "react-router-dom";
import "./Login.css";
import { Link } from "react-router-dom";

export class Login extends Component {
  static defaultProps = {
    onLoginSuccess: () => {}
  };

  state = { error: null };

  handleSubmitBasicAuth = ev => {
    ev.preventDefault();
    const { user_name, password } = ev.target;

    TokenService.saveAuthToken(
      TokenService.makeBasicAuthToken(user_name.value, password.value)
    );

    user_name.value = "";
    password.value = "";
    this.props.onLoginSuccess();
  };

  handleSubmitJwtAuth = ev => {
    ev.preventDefault();
    this.setState({ error: null });
    const { user_name, password } = ev.target;

    AuthApiService.postLogin({
      user_name: user_name.value,
      password: password.value
    })
      .then(res => {
        user_name.value = "";
        password.value = "";
        TokenService.saveAuthToken(res.authToken);
        this.props.onLoginSuccess();
      })
      .catch(res => {
        console.log(res.error);
        //this.setState({ error: res.error });
      });
  };
  
  loginButton() {
    if (this.props.userToken) {
      this.props.history.push("/articles")
    }
  }
  render() {
    const { error } = this.state;
    return (
      <form className="whole-container" onSubmit={this.handleSubmitJwtAuth}>
        <div role="alert">{error && <p className="red">{error}</p>}</div>
        <div className="login-containter">
          <h2 className="sign-up">Login</h2>
          <label className="label-login" htmlFor="LoginForm__user_name">User name</label>
          <input
            className="login-input"
            required
            name="user_name"
            id="LoginForm__user_name"
          />

          <label className="label-login"htmlFor="LoginForm__password">Password</label>
          <input
            className="login-input"
            required
            name="password"
            type="password"
            id="LoginForm__password"
          />

          <div className="button-container">
            <button onClick={this.loginButton.bind(this)} className="join-button">Sign in</button>
            <p className="already-reg">
              Need an account? <Link to="/register">Sign up</Link>
            </p>
          </div>
        </div>
      </form>
    );
  }
}

export default withRouter(Login);
