require(`dotenv`).config({
  path: `.env.${process.env.NODE_ENV}`
})
module.exports = {
  plugins: [
    'gatsby-plugin-postcss',
    {
      resolve: `gatsby-source-graphql`,
      options: {
        typeName: `Contentful`,
        fieldName: `contentful`,
        url: `https://graphql.contentful.com/content/v1/spaces/08c3omjgrm89`,
        headers: {
          Authorization: `Bearer ${process.env.GATSBY_CONTENTFUL_TOKEN}`
        }
      }
    }
  ]
}
