#!/bin/bash

BRANCH=$(git rev-parse --abbrev-ref HEAD)
PRERELEASE_ARG=""

# IF diff than master, release beta
if [ "$BRANCH" != "master" ]
then
  if [ $1 ]
  then
    VERSION="$1"
  else
    VERSION="prerelease"
  fi
  PRERELEASE_ARG="$VERSION --force-publish --message \"DROP %s\n[skip ci]\""
else
	PRERELEASE_ARG="--conventional-commits --message \":package: release %s\n[ci skip]\""
fi

RELEASE_ARGS="${PRERELEASE_ARG} ${@}"

echo "Running lerna version with '${RELEASE_ARGS}'."

./node_modules/.bin/lerna version $RELEASE_ARGS
