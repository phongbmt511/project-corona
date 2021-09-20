import React from 'react'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import { Home } from './Container/Home';
import { About } from './Container/About';
import { Dashboard } from './Container/Dashboard';
import { Headers } from './Layout/Headers'
import { Title } from './Layout/Title'

export const App = () => {
  return (
    <div>
      <Router>
        <Headers />
        <Title />
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
