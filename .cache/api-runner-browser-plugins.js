module.exports = [{
      plugin: require('../node_modules/gatsby-plugin-web-font-loader/gatsby-browser.js'),
      options: {"plugins":[],"google":{"families":["DM Sans:wght@400;500;700"]}},
    },{
      plugin: require('../node_modules/gatsby-plugin-manifest/gatsby-browser.js'),
      options: {"plugins":[],"name":"FrontendMentor","short_name":"FEMentor","start_url":"/","background_color":"#f7f0eb","theme_color":"#6abecd","display":"standalone","icon":"src/static/favicon-32x32.png","cache_busting_mode":"query","include_favicon":true,"legacy":true,"theme_color_in_head":true,"cacheDigest":"a07f423b8bbf4a50c2c449b96795fcb6"},
    }]
