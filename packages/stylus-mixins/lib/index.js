const { resolve } = require('path');

module.exports = (options = {}) => (style) => {
  const { autoImport = true } = options;

  style.include(resolve(__dirname));

  if (autoImport) {
    style.import(resolve(__dirname, 'orbit-ui', 'index.styl'));
  }
};
