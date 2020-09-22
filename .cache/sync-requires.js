const { hot } = require("react-hot-loader/root")

// prefer default export if available
const preferDefault = m => (m && m.default) || m


exports.components = {
  "component---cache-dev-404-page-js": hot(preferDefault(require("D:\\gatsby\\photosnap\\.cache\\dev-404-page.js"))),
  "component---src-pages-404-jsx": hot(preferDefault(require("D:\\gatsby\\photosnap\\src\\pages\\404.jsx"))),
  "component---src-pages-features-js": hot(preferDefault(require("D:\\gatsby\\photosnap\\src\\pages\\features.js"))),
  "component---src-pages-index-jsx": hot(preferDefault(require("D:\\gatsby\\photosnap\\src\\pages\\index.jsx"))),
  "component---src-pages-pricing-jsx": hot(preferDefault(require("D:\\gatsby\\photosnap\\src\\pages\\pricing.jsx"))),
  "component---src-pages-stories-js": hot(preferDefault(require("D:\\gatsby\\photosnap\\src\\pages\\stories.js")))
}

