#!/usr/bin/env node

const { execSync } = require('child_process');

const tag = execSync('git tag -l --points-at HEAD').toString();

const matchTag = tag.match(/^v\d*\.\d*\.\d*-(\w*)\.*$/);
const distTag = (matchTag && matchTag[1]) || 'latest';

execSync(
  `./node_modules/.bin/lerna publish from-git --no-changelog --no-git-tag-version --no-push --yes --dist-tag ${distTag}`
);
