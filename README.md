# 🚀 3-Tier DevOps Task Manager Application

A fully containerized 3-tier DevOps application built using React, Node.js, MongoDB, Docker, Docker Compose, GitHub Actions CI/CD, AWS EC2, and Cloudflare Tunnel.

This project demonstrates real-world DevOps concepts including:

- Multi-container architecture
- Docker networking
- Persistent storage using Docker Volumes
- CI/CD automation
- Public application exposure
- Cloud deployment on AWS EC2

---

# 📌 Features

## ✅ Frontend Features

- Modern Dark Theme UI
- Add Tasks
- Delete Tasks
- Mark Tasks as Completed
- Real-time Task Statistics
- Responsive Dashboard Layout

---

## ✅ Backend Features

- REST API using Express.js
- MongoDB Integration using Mongoose
- CRUD Operations
- Error Handling

---

## ✅ Database Features

- MongoDB Container
- Persistent Storage using Docker Volumes

---

## ✅ DevOps Features

- Dockerized Frontend
- Dockerized Backend
- MongoDB Container
- Docker Compose Orchestration
- Docker Named Volumes
- GitHub Actions CI/CD
- Docker Hub Integration
- AWS EC2 Deployment
- Cloudflare Tunnel Public Access

---

# 🏗️ Architecture

```text
                 Internet Users
                        ↓
               Cloudflare Tunnel
                        ↓
              React Frontend Container
                        ↓
              Node.js Backend Container
                        ↓
            MongoDB Container + Volume
```

---

# ⚙️ Tech Stack

## Frontend

- React.js
- Axios
- CSS

---

## Backend

- Node.js
- Express.js
- Mongoose

---

## Database

- MongoDB

---

## DevOps Tools

- Docker
- Docker Compose
- Docker Volumes
- GitHub Actions
- Docker Hub
- AWS EC2
- Cloudflare Tunnel

---

# 📂 Project Structure

```text
3tier-devops-app/
│
├── frontend/
│   ├── src/
│   ├── public/
│   ├── Dockerfile
│   └── package.json
│
├── backend/
│   ├── server.js
│   ├── Dockerfile
│   └── package.json
│
├── .github/
│   └── workflows/
│       └── deploy.yml
│
├── docker-compose.yml
├── .gitignore
├── README.md
└── setup.sh
```

---

# 🚀 Local Setup

---

# 1️⃣ Clone Repository

```bash
git clone <your-repository-url>
```

---

# 2️⃣ Move Into Project Folder

```bash
cd 3tier-devops-app
```

---

# 3️⃣ Start Containers

```bash
docker compose up --build
```

---

# 4️⃣ Access Application

Frontend:

```text
http://localhost
```

Backend API:

```text
http://localhost:5000/tasks
```

---

# 🐳 Docker Containers

This project uses 3 containers:

| Container | Purpose |
|---|---|
| frontend | React Application |
| backend | Node.js REST API |
| mongo | MongoDB Database |

---

# 🗃️ MongoDB Persistence

MongoDB data is persisted using Docker Named Volumes.

## Docker Compose Volume

```yaml
volumes:
  - mongo-data:/data/db
```

---

# Why Volumes?

Without volumes:
- Data gets deleted when container is removed

With volumes:
- Data persists even after container recreation

---

# Check Volumes

```bash
docker volume ls
```

---

# Inspect Volume

```bash
docker volume inspect 3tier-devops-app_mongo-data
```

---

# 🌐 Cloudflare Tunnel Setup

Install Cloudflared:

```bash
wget https://github.com/cloudflare/cloudflared/releases/latest/download/cloudflared-linux-amd64.deb
```

```bash
sudo dpkg -i cloudflared-linux-amd64.deb
```

---

# Start Tunnel

```bash
cloudflared tunnel --url http://localhost:80
```

---

# Run Tunnel in Background

```bash
nohup cloudflared tunnel --url http://localhost:80 > tunnel.log 2>&1 &
```

---

# Get Tunnel URL

```bash
cat tunnel.log
```

---

# 🔥 API Endpoints

## Get All Tasks

```http
GET /tasks
```

---

## Add Task

```http
POST /tasks
```

Request Body:

```json
{
  "task": "Learn Docker"
}
```

---

## Delete Task

```http
DELETE /tasks/:id
```

---

## Toggle Task Completion

```http
PUT /tasks/:id
```

---

# ☁️ AWS EC2 Deployment

---

# EC2 User Data Script

Paste this in EC2 User Data while launching instance:

```bash
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
```

---

# 🔄 GitHub Actions CI/CD

This project uses GitHub Actions for CI/CD automation.

## CI/CD Workflow

```text
Git Push
   ↓
GitHub Actions
   ↓
Docker Build
   ↓
Docker Hub Push
   ↓
SSH into EC2
   ↓
docker compose pull
   ↓
docker compose up -d
```

---

# GitHub Actions Workflow File

```text
.github/workflows/deploy.yml
```

---

# Required GitHub Secrets

| Secret Name | Purpose |
|---|---|
| DOCKERHUB_USERNAME | Docker Hub Username |
| DOCKERHUB_TOKEN | Docker Hub Access Token |
| EC2_HOST | EC2 Public IP |
| EC2_SSH_KEY | EC2 PEM Private Key |

---

# 🚀 Deployment

Push code:

```bash
git add .

git commit -m "updated app"

git push
```

GitHub Actions automatically:
- Builds Docker images
- Pushes images to Docker Hub
- Deploys latest version to EC2

---

# 🧠 DevOps Concepts Covered

- Multi-container Architecture
- Docker Networking
- Docker Compose
- Docker Volumes
- Persistent Storage
- REST APIs
- CI/CD Automation
- Docker Hub Registry
- AWS EC2 Deployment
- Cloudflare Tunnel
- Infrastructure Automation

---

# 🔥 Future Improvements

- JWT Authentication
- User Accounts
- Kubernetes Deployment
- Terraform Infrastructure
- Nginx Reverse Proxy
- HTTPS Custom Domain
- Monitoring with Prometheus & Grafana
- Rolling Updates
- Blue-Green Deployment

---

# 📸 Screenshots

## Dashboard UI

- Modern Dark Theme
- Task Cards
- Real-time Stats
- Responsive Layout

(Add screenshots here)

---

# ☁️ Production Deployment Flow

```text
Developer
   ↓
Git Push
   ↓
GitHub Actions
   ↓
Docker Hub
   ↓
AWS EC2
   ↓
Docker Compose
   ↓
Cloudflare Tunnel
   ↓
Public Application
```

---

# 👨‍💻 Author

## Neetesh Sahu

Computer Science Engineering Student  
DevOps & Cloud Enthusiast

---

# ⭐ Support

If you liked this project:

- ⭐ Star the repository
- 🍴 Fork the repository
- 🚀 Share with others