const path = require('path');
const { BundleAnalyzerPlugin } = require('webpack-bundle-analyzer');
const StatsPlugin = require('stats-webpack-plugin');

const SRC_DIR = path.join(__dirname, 'src');
const DEST_DIR = path.join(__dirname, 'dist');
const EXAMPLES_DIR = path.join(__dirname, 'examples');
const ARTIFACTS_DIR = path.join('..', 'artifacts');

module.exports = {
  context: SRC_DIR,
  entry: './index.js',
  output: {
    path: DEST_DIR,
    filename: 'orbit-ui-react.js',
    library: 'orbitUIReact',
    libraryTarget: 'umd',
  },
  externals: {
    classnames: {
      commonjs: 'classnames',
      commonjs2: 'classnames',
      amd: 'classnames',
      root: 'classnames',
    },
    'prop-types': {
      commonjs: 'prop-types',
      commonjs2: 'prop-types',
      amd: 'PropTypes',
      root: 'PropTypes',
    },
    react: {
      commonjs: 'react',
      commonjs2: 'react',
      amd: 'React',
      root: 'React',
    },
    'react-dom': {
      commonjs: 'react-dom',
      commonjs2: 'react-dom',
      amd: 'ReactDOM',
      root: 'ReactDOM',
    },
  },
  resolve: {
    extensions: ['.jsx', '.js', '.json'],
  },
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        loader: 'babel-loader',
        include: [
          SRC_DIR,
          EXAMPLES_DIR,
        ],
      },
    ],
  },
  plugins: [
    new BundleAnalyzerPlugin({
      analyzerMode: 'static',
      openAnalyzer: false,
      reportFilename: path.join(ARTIFACTS_DIR, 'bundle-analysis.html'),
      generateStatsFile: false,
      statsOptions: {
        context: process.cwd(),
        source: false,
      },
    }),
    new StatsPlugin(
      path.join(ARTIFACTS_DIR, 'artifcats'),
      {
        context: process.cwd(),
        assets: true,
        timings: true,
        modules: true,
        chunks: true,
        performance: false,
        children: false,
        source: false,
      },
    ),
  ],
};
