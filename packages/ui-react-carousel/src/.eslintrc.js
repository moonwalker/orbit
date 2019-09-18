const path = require('path');

const ROOT_DIR = path.join(__dirname, '../../../');

module.exports = {
  extends: path.join(ROOT_DIR, 'node_modules/@moonwalker/pre-flight-check/eslint'),
  rules: {
    'import/no-extraneous-dependencies': [
      'error',
      {
        peerDependencies: true,
        devDependencies: ['**/*stories.jsx', '**/*.spec.js']
      }
    ],
    'import/prefer-default-export': 'off',
    'react/jsx-props-no-spreading': 'off'
  },
  settings: {
    'import/resolver': {
      webpack: {
        config: path.join(__dirname, '../webpack.config.js')
      }
    }
  }
};
