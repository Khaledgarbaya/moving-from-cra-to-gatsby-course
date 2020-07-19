import React from 'react'
import { Link } from 'gatsby'
import { logout, isLoggedIn } from '../services/auth'
import '../css/index.css'
const Layout = ({ children }) => {
  return (
    <div>
      <h1>Gatsby Pokedex!</h1>
      {isLoggedIn() && (
        <button onClick={() => logout(() => {})}>
          Logout
        </button>
      )}
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/about">About</Link>
        </li>
        <li>
          <Link to="/app/profile">Profile</Link>
        </li>
        <li>
          <Link to="/app/stats">Stats</Link>
        </li>
        <li>
          <Link to="pokemons">Pokemons</Link>
        </li>
      </ul>
      {children}
    </div>
  )
}

export default Layout
