const slugify = require('slugify');
const fetch = require('node-fetch');
const { createRemoteFileNode } = require('gatsby-source-filesystem');

exports.sourceNodes = async ({
  actions,
  createNodeId,
  createContentDigest,
  reporter,
}) => {
  const { createNode, createTypes } = actions;

  const result = await fetch('https://restcountries.com/v3.1/all');
  const resultData = await result.json();

  if (!result) {
    reporter.panic('error loading content');
    return;
  }

  createTypes(`
        type Country implements Node {
            region: Region! @link(by: "name" from: "region")
        }

        type Region implements Node {
            countries: [Country!]! @link(by: "region.name" from: "name")
        }    

        type borderCountry implements Node {
            name: String
            slug: String
        }
    `);

  resultData.forEach((country) => {
    createNode({
      ...country,
      id: createNodeId(`country-${country.name.common}`),
      slug: slugify(country.name.common, { lower: true }),
      parent: null,
      children: [],
      internal: {
        type: `Country`,
        content: JSON.stringify(country),
        contentDigest: createContentDigest(country),
      },
    });

    createNode({
      name: country.region,
      id: createNodeId(`region-${country.region}`),
      slug: slugify(country.region, { lower: true }),
      parent: null,
      children: [],
      internal: {
        type: `Region`,
        content: JSON.stringify(country.region),
        contentDigest: createContentDigest(country.region),
      },
    });
  });
};

exports.createPages = async ({ actions, graphql }) => {
  const { createPage } = actions;

  const result = await graphql(`
    query GetCountries {
      allCountry {
        nodes {
          id
          slug
        }
      }
      allRegion {
        nodes {
          id
          slug
        }
      }
    }
  `);

  if (!result) {
    reporter.panic('error loading content', result.errors);
    return;
  }

  const allCountry = result.data.allCountry.nodes;

  allCountry.forEach((country) => {
    createPage({
      path: `/country/${country.slug}`,
      component: require.resolve(`${__dirname}/src/templates/country.js`),
      context: {
        id: country.id,
        slug: country.slug,
      },
    });
  });

  const allRegion = result.data.allRegion.nodes;

  allRegion.forEach((region) => {
    createPage({
      path: `/region/${region.slug}`,
      component: require.resolve(
        `${__dirname}/src/templates/regionCountries.js`,
      ),
      context: {
        id: region.id,
        slug: region.slug,
      },
    });
  });
};

exports.createResolvers = ({
  actions,
  cache,
  createNodeId,
  createContentDigest,
  createResolvers,
  store,
  reporter,
}) => {
  const { createNode } = actions;
  const resolvers = {
    Country: {
      flagImage: {
        type: 'File',
        resolve: (source) => {
          if (source.flags.png) {
            return createRemoteFileNode({
              url: `${source.flags.png}`,
              store,
              cache,
              createNode,
              createNodeId,
              reporter,
            });
          } else {
            return null;
          }
        },
      },
      nativeName: {
        type: 'String',
        resolve: (source) => {
          // Get just one native name
          const nativeNameObj = source.name.nativeName;
          const nativeNameLangKey = Object.keys(nativeNameObj)[0];
          if (nativeNameLangKey) {
            return nativeNameObj[nativeNameLangKey].common;
          } else {
            return null;
          }
        },
      },
      mainCurrencies: {
        type: '[String]',
        resolve: (source) => {
          // Turn currencies to array of strings
          const currenciesObj = source.currencies;
          const currenciesKeys = Object.keys(currenciesObj);
          if (currenciesKeys.length > 0) {
            return currenciesKeys.map((key) => currenciesObj[key].name);
          } else {
            return null;
          }
        },
      },
      mainLanguages: {
        type: '[String]',
        resolve: (source) => {
          // Turn languages to array of strings
          const languagesObj = source.languages;
          const languagesObjKeys = Object.keys(languagesObj);
          if (languagesObjKeys.length > 0) {
            return languagesObjKeys.map((key) => languagesObj[key]);
          } else {
            return null;
          }
        },
      },
      borderCountries: {
        type: '[borderCountry]',
        resolve: async (source) => {
          // Get countries by their codes
          const borders = source.borders;

          if (borders && borders.length > 0) {
            const data = await Promise.all(
              borders.map((border) =>
                fetch(`https://restcountries.com/v3.1/alpha/${border}`),
              ),
            )
              .then((results) => Promise.all(results.map((r) => r.json())))
              .catch((err) => {
                console.log(err);
                return null;
              });

            if (data.length > 0) {
              return data.map((country) => {
                return {
                  id: createNodeId(`country-${country[0].name.common}`),
                  name: country[0].name.common,
                  slug: slugify(country[0].name.common, { lower: true }),
                  parent: null,
                  children: [],
                  internal: {
                    type: `borderCountry`,
                    content: JSON.stringify(country[0]),
                    contentDigest: createContentDigest(country[0]),
                  },
                };
              });
            } else {
              return null;
            }
          } else {
            return null;
          }
        },
      },
    },
  };

  createResolvers(resolvers);
};
