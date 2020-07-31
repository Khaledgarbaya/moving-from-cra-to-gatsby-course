import React from 'react'
import { Link } from 'gatsby'
const pokemons = [
  {
    slug: 'bulbasaur',
    name: 'Bulbasaur'
  },
  {
    slug: 'ivysaur',
    name: 'Ivysaur'
  },
  {
    slug: 'charmander',
    name: 'Charmander'
  },
  {
    slug: 'squirtle',
    name: 'Squirtle'
  }
]
const PokemonLayout = ({ children }) => {
  return (
    <div>
      <ul role="navigation">
        {pokemons.map(pokemon => (
          <li>
            <Link
              className="bg-white inline-block py-2 px-4 text-blue-500 hover:text-blue-800 font-semibold"
              to={pokemon.slug}
            >
              {pokemon.slug}
            </Link>
          </li>
        ))}
      </ul>
      {children}
    </div>
  )
}

export default PokemonLayout
