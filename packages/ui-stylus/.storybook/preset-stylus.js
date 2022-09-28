// https://github.com/storybookjs/presets/blob/master/packages/preset-scss/index.js
function wrapLoader(loader, options) {
  if (options === false) {
    return [];
  }

  return [
    {
      loader,
      options,
    },
  ];
}

module.exports = {
  webpack: (webpackConfig = {}, options = {}) => {
    const { module = {} } = webpackConfig;
    const {
      styleLoaderOptions,
      cssLoaderOptions,
      stylusLoaderOptions,
      rule = {},
    } = options;

    return {
      ...webpackConfig,
      module: {
        ...module,
        rules: [
          ...(module.rules || []),
          {
            test: /\.styl$/,
            ...rule,
            use: [

              ...wrapLoader(require.resolve('style-loader'), styleLoaderOptions),
              ...wrapLoader(require.resolve('css-loader'), cssLoaderOptions),
              ...wrapLoader(require.resolve('stylus-loader'), stylusLoaderOptions)
            ],
          },
        ],
      },
    };
  }
};
