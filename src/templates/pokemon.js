import React from 'react'
import Layout from '../components/layout'
import PokemonLayout from '../components/pokemons-layout'
const Pokemon = ({ pageContext }) => {
  return (
    <Layout>
      <PokemonLayout>
        <h1>this pokemon is {pageContext.name}</h1>
      </PokemonLayout>
    </Layout>
  )
}

export default Pokemon
