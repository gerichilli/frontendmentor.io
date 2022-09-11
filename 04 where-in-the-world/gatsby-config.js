module.exports = {
  siteMetadata: {
    title: `Where in the world`,
    image: `${__dirname}/src/images/logo.png`,
    description: `View and search for all the countries in the world`,
    siteUrl: `https://www.yourdomain.tld`,
  },
  plugins: [
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    {
      resolve: `gatsby-plugin-google-fonts`,
      options: {
        fonts: [`nunito sans\:400,600,700,800`],
        display: 'swap',
      },
    },
    {
      resolve: 'gatsby-plugin-local-search',
      options: {
        name: 'pages',
        engine: 'flexsearch',
        query: `
            query {
              allCountry {
                nodes {
                  id
                  slug
                  name {
                    common
                  }
                  flags {
                    svg
                  }
                  population
                  region {
                    name
                  }
                  capital
                }
              }
            }`, // grab the data of all countries
        ref: 'slug', //  value unique to each country
        index: ['name', 'region', 'capital'], //  values that you want FlexSearch to search from
        store: [
          'id',
          'slug',
          'name',
          'flags',
          'population',
          'region',
          'capital',
        ], //  values that you want to return from the search
        normalizer: ({ data }) =>
          data.allCountry.nodes.map((node) => ({
            id: node.id,
            slug: node.slug,
            name: node.name.common,
            flags: node.flags.svg,
            population: node.population,
            region: node.region.name,
            capital: node.capital,
          })), //  function that returns the data you want to index from data to store
      },
    },
    `gatsby-plugin-sass`,
    `gatsby-plugin-image`,
    `gatsby-plugin-sharp`,
    `gatsby-transformer-sharp`,
  ],
};
