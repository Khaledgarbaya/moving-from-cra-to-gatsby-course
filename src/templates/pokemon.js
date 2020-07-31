import React, { useState, useEffect } from 'react'
import { createClient } from 'contentful'
import Layout from '../components/layout'
import PokemonLayout from '../components/pokemons-layout'
const Pokemon = ({ pageContext }) => {
  const [power, setPower] = useState('')
  useEffect(() => {
    const client = createClient({
      space: '08c3omjgrm89',
      accessToken: process.env.GATSBY_CONTENTFUL_TOKEN
    })
    client
      .getEntries({
        'fields.slug': pageContext.slug,
        content_type: 'pokemon'
      })
      .then(response => {
        setPower(response.items[0].fields.power)
      })
  }, [])
  return (
    <Layout>
      <PokemonLayout>
        <h1>this pokemon is {pageContext.name}</h1>
        <p>power: {power}</p>
      </PokemonLayout>
    </Layout>
  )
}

export default Pokemon
