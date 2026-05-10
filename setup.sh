#!/bin/bash

# Update Packages
sudo apt update -y

# Install Docker
sudo apt install docker.io -y

# Start Docker
sudo systemctl start docker
sudo systemctl enable docker

# Install Docker Compose
sudo apt install docker-compose-v2 -y

# Install Git
sudo apt install git -y

# Install Cloudflared
wget https://github.com/cloudflare/cloudflared/releases/latest/download/cloudflared-linux-amd64.deb

sudo dpkg -i cloudflared-linux-amd64.deb

# Add Ubuntu User to Docker Group
sudo usermod -aG docker ubuntu

# Refresh Docker Group
newgrp docker