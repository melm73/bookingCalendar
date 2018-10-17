import React, { Component } from 'react';
import './LoginForm.css';

class LoginForm extends Component {
  render() {
    return (
      <div id="login-form">
        <h1>Login</h1>
        <form>
          <div className="form-group">
            <label for="inputUsername">Username</label>
            <input type="text" className="form-control" id="inputUsername" placeholder="Username" />
          </div>
          <div className="form-group">
            <label for="inputPassword">Password</label>
            <input type="password" className="form-control" id="inputPassword" placeholder="Password" />
          </div>
          <button type="submit" className="btn btn-outline-primary">Login</button>
        </form>
      </div>
    );
  }
}

export default LoginForm;
