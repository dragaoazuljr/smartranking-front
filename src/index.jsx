import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Login from './components/login/Login';
import Home from './components/home/Home';
import SignUp from './components/siginup/SignUp';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';


ReactDOM.render(
  <BrowserRouter>
    <Switch>
      <Route path="/" exact={true} component={Login} />
      <Route path="/login" exact={true} component={Login} />
      <Route path="/signup" exact={true} component={SignUp} />
      <Route path="/home" exact={true} component={Home} />
    </Switch>
  </BrowserRouter>
  ,
  document.getElementById('root')
);
