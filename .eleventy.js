const pluginSass = require("eleventy-plugin-sass");

module.exports = function(eleventyConfig) {
    eleventyConfig.addPlugin(pluginSass, {
      watch: ['site/**/*.{scss,sass}', '!node_modules/**'],
    });

  return {
    dir: { input: 'site', output: 'public', data: '_data' },
    passthroughFileCopy: true,
    templateFormats: ['njk', 'md', 'css', 'html', 'yml',"txt"],
    htmlTemplateEngine: 'njk'
  }
}
