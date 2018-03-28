const path = require('path');

const SRC_DIR = path.join(__dirname, 'src');
const DEST_DIR = path.join(__dirname, 'dist');

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
    react: 'React',
    'react-dom': 'ReactDOM',
  },
  resolve: {
    extensions: ['.jsx', '.js', '.json'],
  },
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        loader: 'babel-loader',
        include: SRC_DIR,
      },
    ],
  },
};
