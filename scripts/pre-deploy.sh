#!/bin/bash

mkdir -p ~/.ssh
ssh-keyscan -H github.com >> ~/.ssh/known_hosts

cat >> ~/.ssh/config << EOF
StrictHostKeyChecking no
EOF

# NPM
echo "//registry.npmjs.org/:_authToken=$NPM_TOKEN" > ~/repo/.npmrc
