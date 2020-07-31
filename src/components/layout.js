import React from 'react'
import { Link } from 'gatsby'
import { logout, isLoggedIn } from '../services/auth'
import '../css/index.css'
const Layout = ({ children }) => {
  return (
    <div className="prose prose-xl">
      <h1>Gatsby Pokedex!</h1>
      {isLoggedIn() && (
        <button onClick={() => logout(() => {})}>
          Logout
        </button>
      )}
      <ul>
        <li>
          <Link
            className="bg-white inline-block py-2 px-4 text-blue-500 hover:text-blue-800 font-semibold"
            to="/"
          >
            Home
          </Link>
        </li>
        <li>
          <Link
            className="bg-white inline-block py-2 px-4 text-blue-500 hover:text-blue-800 font-semibold"
            to="/about"
          >
            About
          </Link>
        </li>
        <li>
          <Link
            className="bg-white inline-block py-2 px-4 text-blue-500 hover:text-blue-800 font-semibold"
            to="/app/profile"
          >
            Profile
          </Link>
        </li>
        <li>
          <Link
            className="bg-white inline-block py-2 px-4 text-blue-500 hover:text-blue-800 font-semibold"
            to="/app/stats"
          >
            Stats
          </Link>
        </li>
        <li>
          <Link
            className="bg-white inline-block py-2 px-4 text-blue-500 hover:text-blue-800 font-semibold"
            to="pokemons"
          >
            Pokemons
          </Link>
        </li>
      </ul>
      {children}
    </div>
  )
}

export default Layout
