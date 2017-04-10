import React from 'react';
import ReactDOM from 'react-dom';
import { Router, browserHistory, Route, IndexRoute } from 'react-router';

import App from './App.js';
import Register from './components/Register.js';
import Login from './components/Login.js';
import DashBoard from './components/DashBoard.js';

const verifyToken = function(nextRoute, replace) {
  const token = window.localStorage.getItem('token');
  if(token){
    replace(nextRoute.location.patname);
  } else {
    replace('/login');
  }
}

const authRoutes = function(nextRoute, replace) {
  const token = window.localStorage.getItem('token');
  if(token){
    replace('/dashboard');
  } else {
    replace(nextRoute.location.patname);
  }
}

ReactDOM.render(
  <Router history={browserHistory}>

    <Route path="/dashboard" component={DashBoard} onEnter={verifyToken}>
      <IndexRoute component={DashBoard}></IndexRoute>
    </Route>

    <Route path="/" component={App} onEnter={authRoutes}/>
    <Route path="/register" component={Register} onEnter={authRoutes}/>
    <Route path="/login" component={Login} onEnter={authRoutes} />


  </Router>,

  document.getElementById('root')
);
