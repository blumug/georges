#!/bin/bash
set -e
source /home/georges/vars.sh
cd /var/www/georges.io/root/deploy
exec node bundle/main.js
