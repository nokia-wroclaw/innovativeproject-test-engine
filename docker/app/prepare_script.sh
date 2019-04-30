#!/bin/bash

REPO_DIR=test-engine-app-source
REPO_URL=https://github.com/alexpilk/test-engine-app-source.git

if [ ! -d ${REPO_DIR} ]
then
    git clone ${REPO_URL}
else
    cd ${REPO_DIR}
    git pull
fi