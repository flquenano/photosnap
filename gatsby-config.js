const path = require("path");

module.exports = {
  siteMetadata: {
    title: `Photosnap`,
    author: `Francis Luigie Quenano`,
    description: `A marketing photo-sharing app`,
    keywords: ["frontendmentor", "photosnap", "advanced", "flquenano"],
    siteURL: `https://photosnap-plum.vercel.app/`
  },
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
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: path.join(__dirname, `content`, `shared`),
        name: `shared`
      }
    },
    {
      resolve: `gatsby-plugin-sharp`,
      options: {
        defaultQuality: 100
      }
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-styled-components`,
    `gatsby-plugin-react-svg`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `FrontendMentor`,
        short_name: `FEMentor`,
        start_url: `/`,
        background_color: `#f7f0eb`,
        theme_color: `#6abecd`,
        display: `standalone`,
        icon: "src/static/favicon-32x32.png"
      }
    }
  ]
};
