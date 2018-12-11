module.exports = {
  extends: 'airbnb',
  rules: {
    'import/no-extraneous-dependencies': [
      'error', {
        peerDependencies: true,
        devDependencies: [
          '**/*stories.jsx',
          '**/*.spec.js',
        ],
      }
    ],
    'import/prefer-default-export': 'off',
  },
}
