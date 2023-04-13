import path from 'path';

import orbitUI from '../lib';

/** @type {import('@storybook/html-webpack5').StorybookConfig} */
const config = {
  stories: [
    {
      directory: '../lib',
      files: '**/*.stories.@(mdx|tsx|ts|jsx|js)'
    }
  ],
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
    }
    // '@storybook/addon-links',
    // '@storybook/addon-essentials'
  ],
  framework: {
    name: '@storybook/html-webpack5',
    options: {
      builder: { lazyCompilation: true }
    }
  }
};

export default config;
