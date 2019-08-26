import React from 'react';
import { Route, Switch } from 'react-router-dom';
import PageIntro from './pages/PageIntro';
import PageStudent from './pages/PageStudent';
import App from './admin/index';
import './App.css';

const AdminApp = () => (
  <div>
    <Switch>
      <Route exact path="/Home" component={PageStudent} />
      <Route exact path="/" component={PageIntro} />
      <Route exact path="/admin" component={App} />
    </Switch>
  </div>
);

export default AdminApp;
