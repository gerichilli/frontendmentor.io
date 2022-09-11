# Where in the world?

## Built with

- SCSS
- ReactJS
- GatsbyJS
- REST Countries API

## Progress

### 1. Set up new project

- Install Gatsby Cli `npm install -g gatsby-cli`
- Create a new site with `npm init gatsby`
- Fill all Gatsby question like name, preferred language, additional tools etc.
- After the installation completed, go to project folder `cd 04 where-in-the-world`
- Run `npm run develop`
- Go to http://localhost:8000/

### 2. Install plugins

- [gatsby-plugin-sass](https://www.gatsbyjs.com/docs/how-to/styling/sass/): Enable scss
- [gatsby-source-filesystem](https://www.gatsbyjs.com/docs/how-to/sourcing-data/sourcing-from-the-filesystem): create File nodes from local files
- [gatsby-plugin-image](https://www.gatsbyjs.com/plugins/gatsby-plugin-image/): Adding responsive images
- [gatsby-plugin-sharp](https://www.gatsbyjs.com/plugins/gatsby-plugin-sharp/)
- [gatsby-transformer-sharp](https://www.gatsbyjs.com/docs/conceptual/image-plugin-architecture/#gatsby-transformer-sharp): This plugin attaches a childImageSharp node to all image File nodes
- [gatsby-plugin-google-fonts](https://www.gatsbyjs.com/plugins/gatsby-plugin-google-fonts/)
- [gatsby-plugin-html-attributes](https://www.gatsbyjs.com/plugins/gatsby-plugin-html-attributes/)
- [gatsby-plugin-manifest](https://www.gatsbyjs.com/plugins/gatsby-plugin-manifest/)
- [gatsby-plugin-local-search](https://www.gatsbyjs.com/plugins/gatsby-plugin-local-search/)
- Add all plugins to `gatsby-config.js`

### 3. Create some components

- `src/components`

  - Header
  - Footer
  - Layout
  - CountryCard
  - CountryList
  - ToggleTheme
  - Search

- `src/styles`

  - global.scss
  - Header.module.scss
  - Footer.module.scss
  - CountryCard.module.scss
  - CountryList.module.scss
  - ToggleTheme.module.scss
  - Search.module.scss

- Add functionality to components with static data

### 4. Fetch the real data

** Not use anymore **

- Install [gatsby-source-graphql](https://www.gatsbyjs.com/plugins/gatsby-source-graphql/)
- Connect GraphQL APIs to Gatsby GraphQL

```
resolve: `gatsby-source-graphql`,
  options: {
    typeName: 'Countries',
    fieldName: 'countries',
    url: 'https://graphql.country/graphql',
},
```

** I source data by my self instead **

- install data
- source data
- create types - using `createSchemaCustomization` API (`createTypes` in `sourceNodes` is deprecated)
- create node by the fetched data
  - Country
  - Region
- create relationship between Country and Region
- resolver some nodes
  - Country
    - flagImage
    - nativeImage
    - currencies -> mainCurrencies
    - languages -> mainLanguages
    - borders -> borderCountries

### 5. Create page for each country

- get allCountry data by graphql
- create page for all countries by createPage API
  - template: `/src/templates/country.js`
  - path: `/country/country.slug`

### 7. Styling error status

### 8. Infinite scrolling

- [Reference](https://www.erichowey.dev/writing/load-more-button-and-infinite-scroll-in-gatsby/)

### 9. Imply searching and filtering

- [Add Search](https://www.gatsbyjs.com/docs/how-to/adding-common-features/adding-search/)
- [Reference](https://www.emgoto.com/gatsby-search/)
- [Document](https://www.gatsbyjs.com/plugins/gatsby-plugin-local-search)
- Install `gatsby-plugin-local-search`
- Install `flexsearch react-use-flexsearch`
- Config gatsby-plugin-local-search in `gatsby-config.js`
- Using `useFlexSearch` in index.js
