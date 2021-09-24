import React from 'react'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import { About } from './Container/About';
import { Dashboard } from './Container/Dashboard';
import { Headers } from './Layout/Headers'
import Home from './Container/Home';

function App() {
  return (
    <div>
      <Router>
        <Headers />
        <Switch>
          <Route exact path="/" component={Home}>
            <Home />
          </Route>
          <Route path="/about" component={About}>
            <About />
          </Route>
          <Route path="/dashboard" component={Dashboard}>
            <Dashboard />
          </Route>
        </Switch>
      </Router>
    </div>
  )
}

export default App ;

