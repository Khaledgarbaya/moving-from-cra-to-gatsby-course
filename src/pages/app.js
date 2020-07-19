import React from 'react'
import { Router } from '@reach/router'
import Login from '../components/login'
import PrivateRoute from '../components/private-route'
const Profile = () => <h2>Profile: Welcome John</h2>
const Stats = () => <h2>Stats: John Stats</h2>

const App = () => {
  return (
    <Router>
      <PrivateRoute
        component={Profile}
        path="app/profile"
      />
      <PrivateRoute component={Stats} path="app/stats" />
      <Login path="/app/login" />
    </Router>
  )
}

export default App
