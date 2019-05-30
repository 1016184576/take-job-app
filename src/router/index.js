import React, { Component } from 'react';
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom';
import Login from '../views/login';
import Register from '../views/register';
import Boss from '../views/boss';
import AuthRouter from './authRouter';

export default class Routers extends Component {
  render(){
    return(
      <BrowserRouter>
        <Switch>
            <AuthRouter path="/boss" component={Boss}/>
            <Route path="/login" component={Login}/>
            <Route path="/register" component={Register}/>
        </Switch>
      </BrowserRouter>
    )
  }
}
