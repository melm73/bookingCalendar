import React, { Component } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import Login from './login/login';

export default function(ComposedComponent) {
  class Authentication extends Component {
    static contextTypes = {
      router: PropTypes.object
    };

    componentWillMount() {
      if (this.props.authenticated === null) {
        this.context.router.history.push("/");
      }
    }

    componentWillUpdate(nextProps) {
      if (!nextProps.authenticated) {
        this.context.router.history.push("/");
      }
    }

    render() {
      if (this.props.authenticated) {
        return <ComposedComponent {...this.props} />;
      }
      return <Login />;
    }
  }

  function mapStateToProps(state) {
    return { authenticated: state.authenticated };
  }

  return connect(mapStateToProps)(Authentication);
}
