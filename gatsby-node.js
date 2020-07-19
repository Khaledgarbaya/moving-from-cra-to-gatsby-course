const path = require('path')
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
exports.createPages = ({ actions }) => {
  const { createPage } = actions
  const PokemonTemplate = path.resolve(
    './src/templates/pokemon.js'
  )

  pokemons.forEach(pokemon => {
    createPage({
      path: pokemon.slug,
      component: PokemonTemplate,
      context: {
        name: pokemon.name
      }
    })
  })
}

exports.onCreatePage = async ({ page, actions }) => {
  const { createPage } = actions
  if (page.path.match(/^\/app/)) {
    page.matchPath = '/app/*'

    createPage(page)
  }
}
