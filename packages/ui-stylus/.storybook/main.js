const path = require('path');

const orbitUI = require('../lib');

module.exports = {
  stories: ['../lib/**/*.stories.@(js|mdx)'],
  addons: [
    {
      name: path.join(__dirname, './preset-stylus'),
      options: {
        cssLoaderOptions: {
          modules: false
        },
        stylusLoaderOptions: {
          stylusOptions: {
            use: orbitUI({ autoImport: false }),
            define: {
              '$bem-selectors': true
            }
          }
        }
      }
    },
    '@storybook/addon-links',
    '@storybook/addon-essentials'
  ],
  framework: '@storybook/html'
};
