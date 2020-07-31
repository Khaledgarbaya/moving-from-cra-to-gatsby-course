const path = require('path')
exports.createPages = async ({ actions, graphql }) => {
  const { createPage } = actions
  const PokemonTemplate = path.resolve(
    './src/templates/pokemon.js'
  )
  const result = await graphql(`
    {
      contentful {
        pokemonCollection {
          items {
            slug
            name
          }
        }
      }
    }
  `)
  result.data.contentful.pokemonCollection.items.forEach(
    pokemon => {
      createPage({
        path: pokemon.slug,
        component: PokemonTemplate,
        context: {
          name: pokemon.name,
          slug: pokemon.slug
        }
      })
    }
  )
}

exports.onCreatePage = async ({ page, actions }) => {
  const { createPage } = actions
  if (page.path.match(/^\/app/)) {
    page.matchPath = '/app/*'

    createPage(page)
  }
}
