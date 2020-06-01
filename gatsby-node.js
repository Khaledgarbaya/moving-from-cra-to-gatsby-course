const path = require('path')

exports.createPages = ({ actions }) => {
  const { createPage } = actions
  const pokemonTemplate = path.resolve(
    './src/templates/pokemon.js'
  )

  createPage({
    path: '/pokemon',
    component: pokemonTemplate,
    context: {
      name: 'pikachu'
    }
  })
}

exports.onCreatePage = ({ page, actions }) => {
  const { createPage } = actions
  if (page.path.match(/^\/app/)) {
    page.matchPath = '/app/*'
    createPage(page)
  }
}
