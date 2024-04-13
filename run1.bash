#!/bin/bash
set -e

echo "Type-checking the back end"
pushd Back-end
g++ connect.cpp -o connect
./connect &  # Run server in background
popd

echo "Running"
pushd front_end

# Open index.html in default web browser
open index2.html  # For macOS
start index2.html # For Windows

popd

echo "Done"