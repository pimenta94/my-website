import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  Redirect,
  Switch,
} from 'react-router-dom';

// Pages
import Home from './pages/home/Home';
import Coimbra from './pages/coimbra/Coimbra';

const App = () => {
  return (
    <Router>
      <Switch>
        <Route path="/" exact>
          <Home />
        </Route>
        <Route path="/coimbra" exact>
          <Coimbra />
        </Route>
        <Redirect to="/" />
      </Switch>
    </Router>
  );
};

export default App;
