/**
 * @type {import('gatsby').GatsbyConfig}
 */
module.exports = {
  pathPrefix: "/yordalinavm.plausible.test",
  siteMetadata: {
    title: `CatsAndDogs`,
    siteUrl: `https://www.yourdomain.tld`,
  },
  plugins: [
  {
    resolve: `@devular/gatsby-plugin-plausible`,
    options: {
      domain: `yordalinavm.plausible.test`,
      proxyScript: 'https://plausible.io/js/script.js',
    },
  },
],
}
