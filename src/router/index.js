import React, { Component } from 'react';
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom';
import Login from '../views/login';
import Register from '../views/register';

export default class Routers extends Component {
  render(){
    return(
      <BrowserRouter>
        <Switch>
            <Route path="/login" component={Login}/>
            <Route path="/register" component={Register}/>
        </Switch>
      </BrowserRouter>
    )
  }
}
