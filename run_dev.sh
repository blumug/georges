#!/bin/bash
set -e
source /home/42favs/vars.sh
cd /var/www/42favs/root/deploy
exec node bundle/main.js
