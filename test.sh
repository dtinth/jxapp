#!/bin/bash -e

echo "Starting the test! Don't press anything..."

(
  sleep 3
  osascript -e 'tell application "System Events" to key code 36'
  sleep 1
  osascript -e 'tell application "System Events" to keystroke "YES"'
  osascript -e 'tell application "System Events" to key code 36'
  sleep 1
  osascript -e 'tell application "System Events" to key code 36'
  sleep 1
  osascript -e 'tell application "System Events" to key code 53'
  sleep 1
  osascript -e 'tell application "System Events" to key code 36'
  sleep 1
  osascript -e 'tell application "System Events" to key code 53'
) &

(echo 'window = this;'; browserify test.js; echo ';ObjC.import("stdlib");$.exit(0)') | osascript -l JavaScript
