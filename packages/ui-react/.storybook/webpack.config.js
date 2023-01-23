/* globals require, __dirname, process */
const path = require('path');
const { merge: webpackMerge } = require('webpack-merge');
const autoprefixer = require('autoprefixer');
const orbitUI = require('@moonwalker/orbit-ui-stylus');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = ({ config }) =>
  webpackMerge(config, {
    resolve: {
      modules: [path.resolve(__dirname, '..', 'node_modules')]
    },
    module: {
      rules: [
        {
          test: /\.(styl)$/,
          enforce: 'post',
          use: process.env.NODE_ENV === 'production' ? MiniCssExtractPlugin.loader : 'style-loader'
        },
        {
          test: /\.(styl)$/,
          oneOf: [
            {
              test: /modules\.(styl)$/,
              use: [
                {
                  loader: 'css-loader',
                  options: {
                    modules: {
                      localIdentName: '[path]-[name]__[local]'
                    }
                  }
                },
                {
                  loader: 'postcss-loader',
                  options: {
                    sourceMap: true,
                    postcssOptions: {
                      plugins: [autoprefixer]
                    }
                  }
                }
              ]
            },
            {
              use: [
                'css-loader',
                {
                  loader: 'postcss-loader',
                  options: {
                    sourceMap: true,
                    postcssOptions: {
                      plugins: [autoprefixer]
                    }
                  }
                }
              ]
            }
          ]
        },
        {
          test: /\.styl$/,
          enforce: 'pre',
          loader: 'stylus-loader',
          options: {
            stylusOptions: {
              use: orbitUI()
            }
          }
        }
      ]
    },
    plugins: [
      ...(process.env.NODE_ENV === 'production'
        ? [
            new MiniCssExtractPlugin({
              filename: '[name].css'
            })
          ]
        : [])
    ]
  });
