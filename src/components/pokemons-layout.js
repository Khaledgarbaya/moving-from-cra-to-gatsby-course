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
            <Link to={pokemon.slug}>{pokemon.slug}</Link>
          </li>
        ))}
      </ul>
      {children}
    </div>
  )
}

export default PokemonLayout
