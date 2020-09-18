const path = require("path");

module.exports = {
  plugins: [
    `gatsby-transformer-json`,
    {
      resolve: `gatsby-plugin-web-font-loader`,
      options: {
        google: {
          families: ["DM Sans:wght@400;500;700"]
        }
      }
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: path.join(__dirname, `content`, `stories`),
        name: `stories`
      }
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: path.join(__dirname, `content`, `home`),
        name: `home`
      }
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: path.join(__dirname, `content`, `features`),
        name: `features`
      }
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: path.join(__dirname, `content`, `pricing`),
        name: `pricing`
      }
    },

    `gatsby-plugin-sharp`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-styled-components`,
    `gatsby-plugin-react-svg`
  ]
};
