import React from 'react'
import { Router } from '@reach/router'

const Profile = () => <h2>Profile</h2>
const Details = () => <h2>Details</h2>
const Default = () => <h1>Default</h1>

const App = () => {
  return (
    <Router basepath="/app">
      <Profile path="/profile" />
      <Details path="/details" />
      <Default path="/" />
    </Router>
  )
}
export default App
