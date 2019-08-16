import React from 'react';
import { Route, Switch } from 'react-router-dom';
import PageIntro from './pages/PageIntro';
import PageStudent from './pages/PageStudent';
import './App.css';

const App = () => (
  <div>
    <Switch>
      <Route exact path="/Home" component={PageStudent} />
      <Route exact path="/" component={PageIntro} />
    </Switch>
  </div>
);

export default App;
