#!/usr/bin/zsh
echo "======================= building"
npm run build
echo "======================= deleting old content from remote server"
ssh root@212.103.62.116 'rm -rf /var/www/today
echo "======================= uploading new content to remote server'
scp -r build root@212.103.62.116:/var/www/today
echo "======================= reloading service on remote server"
ssh root@212.103.62.116 'nginx -s reload'
