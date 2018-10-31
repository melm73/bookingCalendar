import React, { Component } from 'react';
import PropTypes from "prop-types";
import { connect } from "react-redux";
import './login.css';
import LoginForm from './login-form';

class Login extends Component {
  static contextTypes = {
    router: PropTypes.object
  };

  componentWillUpdate(nextProps) {
    if (nextProps.authenticated) {
      this.context.router.history.push("/app");
    }
  }

  renderErrorMessage() {
    if (this.props.errorMessage) {
      return (
        <div className='error-message'>
          {this.props.errorMessage}
        </div>
      );
    }
    return undefined;
  }

  render() {
    return (
      <div className="login">
        <div className="row no-gutters justify-content-center">
          <div className="col-sm-3 banner">
            <img src={'images/login_banner.jpg'} alt="" />
          </div>
          <div className="col-sm-3 form">
            <LoginForm />
            {this.renderErrorMessage()}
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    authenticated: state.authenticated,
    errorMessage: state.notifications.get('errorMessage')
  }
};

export default connect(mapStateToProps)(Login);
