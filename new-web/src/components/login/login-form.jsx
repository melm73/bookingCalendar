import React, { Component } from 'react';
import './login-form.css';
import { login } from '../../actions/authentication-actions';

class LoginForm extends Component {
  constructor() {
    super();
    this.state = {};
  }

  onChangePassword = (e) => {
    this.setState({ password: e.target.value });
  };

  onChangeUsername = (e) => {
    this.setState({ username: e.target.value });
  };

  onClick = () => {
    login(this.state.username, this.state.password);
  };

  render() {
    return (
      <div id="login-form">
        <h1>Login</h1>
        <div>
          <div className="form-group">
            <label htmlFor="inputUsername">Username</label>
            <input type="text" className="form-control" id="inputUsername" placeholder="Username" onChange={this.onChangeUsername} />
          </div>
          <div className="form-group">
            <label htmlFor="inputPassword">Password</label>
            <input type="password" className="form-control" id="inputPassword" placeholder="Password" onChange={this.onChangePassword} />
          </div>
          <button className="btn btn-outline-primary" onClick={this.onClick}>Login</button>
        </div>
      </div>
    );
  }
}

export default LoginForm;

