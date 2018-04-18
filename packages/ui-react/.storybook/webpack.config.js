/* globals require, __dirname, process */
const { resolve } = require('path');
const webpackMerge = require('webpack-merge');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const autoprefixer = require('autoprefixer');
const orbitUI = require('@moonwalker/orbit-ui-stylus');

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
        loader: ExtractTextPlugin.extract({
          fallback: 'style-loader',
          use: []
        }),
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
    new ExtractTextPlugin({
      filename: '[name].css',
      disable: process.env.NODE_ENV === 'production',
    }),
  ],
});
