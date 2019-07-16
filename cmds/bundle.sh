#!/bin/bash -xe

rm -rf build
mkdir build

zip build/app.zip * --no-dir-entries --exclude *.sh *.zip
