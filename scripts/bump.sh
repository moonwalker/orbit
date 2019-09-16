#!/bin/bash

BRANCH=$(git rev-parse --abbrev-ref HEAD)
PRERELEASE_ARG=""

# IF diff than master, release beta
if [ "$BRANCH" != "master" ]
then
  PRERELEASE_ARG="prepatch --force-publish"
else
	PRERELEASE_ARG="--conventional-commits"
fi

RELEASE_ARGS="${PRERELEASE_ARG} ${@}"

echo "Running lerna version with '${RELEASE_ARGS}'."

./node_modules/.bin/lerna version --yes $RELEASE_ARGS
