const { resolve } = require('path');
const orbitMixins = require('@moonwalker/orbit-mixins-stylus');

module.exports = (options = {}) => (style) => {
  const { autoImport = true } = options;

  style.include(resolve(__dirname))
    .use(orbitMixins());

  if (autoImport) {
    style.import(resolve(__dirname, 'orbit-ui', 'index.styl'));
  }
};
