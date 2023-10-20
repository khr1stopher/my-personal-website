import type { GatsbyConfig } from "gatsby"

const config: GatsbyConfig = {
  siteMetadata: {
    siteUrl: `https://www.yourdomain.tld`,
  },
  plugins: [
    `gatsby-plugin-sass`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/src/images/`,
      },
    },    {
      resolve: 'gatsby-plugin-manifest',
      options: {
        icon: `${__dirname}/static/favicon.png`, // or 'src/images/favicon.ico'
      },
    }],
}

export default config
