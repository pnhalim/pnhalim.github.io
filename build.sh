#!/bin/bash
set -Eeuo pipefail
set -x

rm -rf dist
rm -rf docs

npm run prod
mv dist docs
