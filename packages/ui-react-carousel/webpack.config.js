const path = require('path');
const StatsPlugin = require('stats-webpack-plugin');
const { BundleAnalyzerPlugin } = require('webpack-bundle-analyzer');
const { BundleStatsWebpackPlugin } = require('bundle-stats');

const SRC_DIR = path.join(__dirname, 'src');
const DEST_DIR = path.join(__dirname, 'dist');
const EXAMPLES_DIR = path.join(__dirname, 'examples');
const ARTIFACTS_DIR = path.join('..', 'artifacts');

module.exports = {
  context: SRC_DIR,
  entry: './index.js',
  output: {
    path: DEST_DIR,
    filename: 'orbit-ui-react-carousel.js',
    library: 'orbitUIReactCarousel',
    libraryTarget: 'umd'
  },
  externals: {
    'prop-types': {
      commonjs: 'prop-types',
      commonjs2: 'prop-types',
      amd: 'PropTypes',
      root: 'PropTypes'
    },
    react: {
      commonjs: 'react',
      commonjs2: 'react',
      amd: 'React',
      root: 'React'
    },
    'react-dom': {
      commonjs: 'react-dom',
      commonjs2: 'react-dom',
      amd: 'ReactDOM',
      root: 'ReactDOM'
    },
    'scroll-into-view-if-needed': {
      commonjs: 'scroll-into-view-if-needed',
      commonjs2: 'scroll-into-view-if-needed',
      amd: 'scrollIntoViewIfNeeded',
      root: 'scrollIntoViewIfNeeded'
    }
  },
  resolve: {
    extensions: ['.jsx', '.js', '.json']
  },
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        loader: 'babel-loader',
        include: [SRC_DIR, EXAMPLES_DIR]
      }
    ]
  },
  plugins: [
    new BundleAnalyzerPlugin({
      analyzerMode: 'static',
      openAnalyzer: false,
      reportFilename: path.join(ARTIFACTS_DIR, 'bundle-analysis.html'),
      generateStatsFile: false,
      statsOptions: {
        context: process.cwd(),
        source: false
      }
    }),
    new StatsPlugin(path.join(ARTIFACTS_DIR, 'webpack-stats.json'), {
      context: SRC_DIR,
      assets: true,
      timings: true,
      modules: true,
      chunks: true,
      entrypoints: true,
      performance: false,
      children: false,
      source: false
    }),
    new BundleStatsWebpackPlugin({
      outDir: '../artifacts'
    })
  ]
};
