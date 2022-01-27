#!/usr/bin/zsh
npm run build
ssh root@212.103.62.116 'rm -rf /var/www/today'
scp -r build root@212.103.62.116:/var/www/today
ssh root@212.103.62.116 'nginx -s reload'
