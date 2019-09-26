import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import AuthRouter from './authRouter';
import Login from '../views/login';
import Register from '../views/register';

import BossInfo from '../views/boss/bossInfo';
import EliteInfo from '../views/elite/eliteInfo';
import Main from '../views/main';
import Chat from '../views/chat';

export default class Routers extends Component {
  render(){
    return(
      <BrowserRouter>
        <Switch>
            <Route path="/bossinfo" component={BossInfo}/>
            <Route path="/eliteInfo" component={EliteInfo}/>
            <Route path="/login" component={Login}/>
            <Route path="/register" component={Register}/>
            <AuthRouter path="/chat/:user" component={Chat} />
            <Route component={Main}/>
        </Switch>
      </BrowserRouter>
    )
  }
}
