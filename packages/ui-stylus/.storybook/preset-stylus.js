// https://github.com/storybookjs/presets/blob/master/packages/preset-scss/index.js
function wrapLoader(loader, options) {
  if (options === false) {
    return [];
  }

  return [
    {
      loader,
      options
    }
  ];
}

module.exports = {
  webpack: (webpackConfig = {}, options = {}) => {
    const { styleLoaderOptions, cssLoaderOptions, stylusLoaderOptions, rule = {} } = options;

    return {
      ...webpackConfig,
      module: {
        ...webpackConfig.module,
        rules: [
          ...(webpackConfig.module.rules || []),
          {
            test: /\.styl$/i,
            ...rule,
            use: [
              ...wrapLoader(require.resolve('style-loader'), styleLoaderOptions),
              ...wrapLoader(require.resolve('css-loader'), cssLoaderOptions),
              ...wrapLoader(require.resolve('stylus-loader'), stylusLoaderOptions)
            ]
          }
        ]
      }
    };
  }
};
