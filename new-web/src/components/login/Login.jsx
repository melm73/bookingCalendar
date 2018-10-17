import React, { Component } from 'react';
import './Login.css';
import LoginForm from './LoginForm';

class Login extends Component {
  render() {
    return (
      <div className="login">
        <div className="row no-gutters">
          <div className="col-md-3 col-md-offset-3 banner">
            <img src={'images/login_banner.jpg'} />
          </div>
          <div className="col-md-3 form">
            <LoginForm />
          </div>
        </div>
      </div>
    );
  }
}

export default Login;
