#!/bin/bash
rm -rf ./deploy
mkdir deploy
meteor build deploy
cd deploy
tar xzfv ./root.tar.gz
cd bundle/programs/server
npm install
