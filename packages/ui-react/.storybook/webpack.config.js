/* globals require, __dirname, process */
const { resolve } = require('path');
const webpackMerge = require('webpack-merge');
const autoprefixer = require('autoprefixer');
const orbitUI = require('@moonwalker/orbit-ui-stylus');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = storybookConfig => webpackMerge(storybookConfig, {
  resolve: {
    modules: [
      resolve(__dirname, '..', 'node_modules'),
    ],
  },
  module: {
    rules: [
      {
        test: /\.(css|styl)$/,
        enforce: 'post',
        use: process.env.NODE_ENV === 'production'
          ? MiniCssExtractPlugin.loader
          : 'style-loader'
      },
      {
        test: /\.(css|styl)$/,
        oneOf: [
          {
            test: /modules\.(css|styl)$/,
            use: [
              {
                loader: 'css-loader',
                options: {
                  modules: true,
                  localIdentName: '[path]-[name]__[local]',
                },
              },
              {
                loader: 'postcss-loader',
                options: {
                  sourceMap: true,
                  plugins: [
                    autoprefixer,
                  ],
                },
              },
            ]
          },
          {
            use: [
              'css-loader',
              {
                loader: 'postcss-loader',
                options: {
                  sourceMap: true,
                  plugins: [
                    autoprefixer,
                  ],
                },
              },
            ],
          },
        ]
      },
      {
        test: /\.styl$/,
        enforce: 'pre',
        loader: 'stylus-loader',
        options: {
          use: orbitUI(),
        }
      }
    ],
  },
  plugins: [
    ...(process.env.NODE_ENV === 'production' ? [
      new MiniCssExtractPlugin({
        filename: '[name].css'
      }),
    ] : [])
  ],
});
