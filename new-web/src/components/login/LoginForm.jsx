import React, { Component } from 'react';
// import { Redirect } from 'react-router';
import './LoginForm.css';
import { login } from '../../actions/authentication-actions';

class LoginForm extends Component {
  onClick = () => {
    console.log('LoginForm.login');
    console.log(this.props);
    login();
  };

  render() {
    console.log('LoginForm.render');
    console.log('props', this.props);

    return (
      <div id="login-form">
        <h1>Login</h1>
        <div>
          <div className="form-group">
            <label htmlFor="inputUsername">Username</label>
            <input type="text" className="form-control" id="inputUsername" placeholder="Username" />
          </div>
          <div className="form-group">
            <label htmlFor="inputPassword">Password</label>
            <input type="password" className="form-control" id="inputPassword" placeholder="Password" />
          </div>
          <button className="btn btn-outline-primary" onClick={this.onClick}>Login</button>
        </div>
      </div>
    );
  }
}

export default LoginForm;

