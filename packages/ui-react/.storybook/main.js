module.exports = {
  core: {
    builder: 'webpack5',
    manager: 'webpack5'
  },
  stories: ['../src/**/*.stories.jsx', '../examples/**/*.stories.jsx'],
  addons: ['@storybook/addon-knobs', '@storybook/addon-essentials']
};
