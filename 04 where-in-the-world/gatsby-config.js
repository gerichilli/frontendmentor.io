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
    `gatsby-plugin-sass`,
    `gatsby-plugin-image`,
    `gatsby-plugin-sharp`,
    `gatsby-transformer-sharp`,
  ],
};
