#!/bin/bash

git config user.email "ci-build@moonwalker.tech"
git config user.name "ci-build"

mkdir -p ~/.ssh
ssh-keyscan -H github.com >> ~/.ssh/known_hosts

cat >> ~/.ssh/config << EOF
StrictHostKeyChecking no
EOF
