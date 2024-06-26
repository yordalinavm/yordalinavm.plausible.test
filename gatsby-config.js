/**
 * @type {import('gatsby').GatsbyConfig}
 */
module.exports = {
  siteMetadata: {
    title: `CatsAndDogs`,
    siteUrl: `https://www.yourdomain.tld`,
  },
  plugins: [
  {
    resolve: `gatsby-plugin-plausible`,
    options: {
      domain: `yordalinavm.plausible.test`,
      proxyScript: 'https://plausible.io/js/script.js',
    },
  },
]
}
