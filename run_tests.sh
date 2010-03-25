#!/bin/sh

if [ "-`which node`-" = "--" ] ; then
  echo "You must first install nodejs."
	exit 1
fi

node `dirname $0`/run_tests.js
