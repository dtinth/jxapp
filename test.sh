#!/bin/bash -e

echo "Starting the test! Don't press anything..."

(
  osascript -l JavaScript test-driver.js
) &

(echo 'window = this;'; browserify test.js; echo ';ObjC.import("stdlib");$.exit(0)') | osascript -l JavaScript
