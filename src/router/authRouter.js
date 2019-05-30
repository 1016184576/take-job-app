import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Route, withRouter } from 'react-router-dom';
import { $localStorage } from '../common/storage';


class AuthRouter extends Component{
  componentWillMount(){
    let isAuthenticated = $localStorage.get("user") ? true : false;
    this.setState({ isAuthenticated },() => {
      if(!isAuthenticated){
        this.props.history.replace({
          pathname: "/login",
          state: { from: this.props.location }
        })
      }
    })
  }
  render(){
    let { component: Component, ...rest } = this.props;
    return(
      this.state.isAuthenticated ? <Route {...rest} render={props => (<Component {...props} />)} /> : null
    )
  }
}

AuthRouter.propTypes = {
  path: PropTypes.string.isRequired,
  exact: PropTypes.bool,
  strict: PropTypes.bool,
  component: PropTypes.func.isRequired
}

export default withRouter(AuthRouter);