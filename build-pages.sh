#!/bin/bash

rm -fr gh-pages
mkdir gh-pages

echo "Build pages ..."
node_modules/.bin/lerna run build-pages

cp -r packages/ui-stylus/dist gh-pages/ui
cp -r packages/ui-react/storybook-static gh-pages/storybook

echo "Deploy pages ..."

node_modules/.bin/gh-pages -d ./gh-pages
