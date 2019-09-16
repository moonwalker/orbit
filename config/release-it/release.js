const config = require('./common');

module.exports = {
  ...config,
  git: {
    ...config,
    commit: false,
    push: false,
    tag: false,
    requireCleanWorkingDir: false,
    requireUpstream: false
  },
  npm: {
    ...config,
    publish: true
  }
};
