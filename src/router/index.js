import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Login from '../views/login';
import Register from '../views/register';
import Boss from '../views/boss';
import BossInfo from '../views/boss/bossInfo';
import EliteInfo from '../views/elite/eliteInfo';
import AuthRouter from './authRouter';

export default class Routers extends Component {
  render(){
    return(
      <BrowserRouter>
        <Switch>
            <AuthRouter path="/boss" component={Boss}/>
            <AuthRouter path="/bossinfo" component={BossInfo}/>
            <AuthRouter path="/eliteInfo" component={EliteInfo}/>
            <Route path="/login" component={Login}/>
            <Route path="/register" component={Register}/>
        </Switch>
      </BrowserRouter>
    )
  }
}
