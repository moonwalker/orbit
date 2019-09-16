#!/bin/bash

BRANCH=$(git rev-parse --abbrev-ref HEAD)
PRERELEASE_ARG=""

# IF diff than master, release beta
if [ "$BRANCH" != "master" ]
then
  PRERELEASE_ARG="prerelease --force-publish --message \"DROP v%s\n[skip ci]\""
else
	PRERELEASE_ARG="--conventional-commits --message \":package: release %s\n[ci skip]\""
fi

RELEASE_ARGS="${PRERELEASE_ARG} ${@}"

echo "Running lerna version with '${RELEASE_ARGS}'."

./node_modules/.bin/lerna version $RELEASE_ARGS
