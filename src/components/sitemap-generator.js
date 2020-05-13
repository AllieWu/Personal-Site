const es2015 = require('babel-preset-es2015');
const presetReact = require('babel-preset-react');
require("babel-register")({
  presets: [es2015, presetReact]
});

var extensions = [ '.css', '.CSS','.jpg', '.JPG', '.png', '.PNG', '.gif', '.GIF'];
extensions.forEach(e =>  
  require.extensions [e] = function () { return null; }
)


const router = require("./sitemap-routes.js").default;
const Sitemap = require("react-router-sitemap").default;

function generateSitemap() {
  return (
  new Sitemap(router())
    .build("https://www.allisonwu.com")
    .save("./public/sitemap.xml")
  );
}

generateSitemap();