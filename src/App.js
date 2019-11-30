import React, { Component } from 'react'
import { HashRouter as Router, Switch, Redirect } from "react-router-dom"
import { routeConfig } from "router"
import routeEach from "utils/routeEach"

class App extends Component {
  render() {
    return (
      <Router>
        <Switch>
          <Redirect from="/" to="/selected" exact />
          {routeEach(routeConfig)}
        </Switch>
      </Router>
    )
  }
}

export default App
