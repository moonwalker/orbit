#!/bin/bash

rm -fr gh-pages
mkdir gh-pages

echo "Deploy pages ..."

cp -r packages/ui-stylus/dist gh-pages/ui
cp -r packages/ui-react/storybook-static gh-pages/react
cp -r packages/ui-react-carousel/storybook-static gh-pages/react-carousel

node_modules/.bin/gh-pages -d ./gh-pages

ssh-keyscan -H github.com >> ~/.ssh/known_hosts

cat >> ~/.ssh/config << EOF
StrictHostKeyChecking no
EOF
