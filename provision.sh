#!/bin/bash
cd /vagrant
sudo apt-get update
sudo apt-get install -y nodejs npm git
sudo ln -s /usr/bin/nodejs /usr/bin/node
sudo rm -r node_modules
sudo -u vagrant -H sh -c "npm install"
echo "Successfully Installed Kong Dashboard."
