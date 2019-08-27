import React from 'react';
import { Route, Switch, Link } from 'react-router-dom';
import PageIntro from './pages/PageIntro';
import PageStudent from './pages/PageStudent';
import AdminApp from './admin/App';
import './App.css';

const App = () => (
  <div>
    <Link to={'/admin/dashboard'}>To Dashboard</Link>
    <Switch>
      {/*<Route exact path="/Home" component={PageStudent} />*/}
      {/*<Route exact path="/" component={PageIntro} />*/}
      <Route path="/admin" component={AdminApp} />
    </Switch>
  </div>
);

export default App;
