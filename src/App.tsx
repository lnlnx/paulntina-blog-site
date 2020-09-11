import React from 'react';
import LandingPage from './containers/LandingPage';
import { Router, Switch, Route } from 'react-router-dom';
import { createBrowserHistory } from 'history';
import { MemoryPage } from './containers/MemoryPage';
import DestinationPage from './containers/DestinationPage';

var hist = createBrowserHistory();

function App() {
  return (
    <Router history={hist}>
      <Switch>
        <Route path='/memories' component={MemoryPage} />
        <Route path='/plans' component={DestinationPage} />
        <Route path='/' component={LandingPage} />
      </Switch>
    </Router>
  );
}

export default App;
