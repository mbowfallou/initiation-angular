#!/bin/bash

# Update the system
sudo apt update
sudo apt upgrade -y

# Install required packages
sudo apt install -y apache2 ssh bind9 docker.io docker-compose git

# Install Intellij Ultimate
sudo snap install intellij-idea-ultimate --classic

# Install Python3 and pip3
sudo apt install -y python3 python3-pip

# Install Node.js and Angular
curl -sL https://deb.nodesource.com/setup_16.x | sudo -E bash -
sudo apt install -y nodejs
sudo npm install -g @angular/cli
