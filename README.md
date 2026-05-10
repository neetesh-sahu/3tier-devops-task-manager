# 🚀 3-Tier DevOps Task Manager Application

A fully containerized 3-tier DevOps project built using React, Node.js, MongoDB, Docker, Docker Compose, and Cloudflare Tunnel.

This project demonstrates modern DevOps concepts including:

- Multi-container applications
- Container networking
- Persistent storage using Docker Volumes
- REST APIs
- Public application exposure using Cloudflare Tunnel

---

# 📌 Features

## ✅ Frontend Features

- Modern Dark Theme UI
- Add Tasks
- Delete Tasks
- Mark Tasks as Completed
- Live Task Statistics
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
- Public Access using Cloudflare Tunnel

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

# 🛠️ Tech Stack

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
├── docker-compose.yml
│
└── README.md
```

---

# ⚙️ Installation & Setup

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

# 3️⃣ Start Docker Containers

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

MongoDB data is stored using Docker Named Volumes.

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

# 🌐 Public Access using Cloudflare Tunnel

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

Public URL Example:

```text
https://random-name.trycloudflare.com
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

# 🧠 DevOps Concepts Covered

- Multi-container Architecture
- Docker Networking
- Docker Compose
- Named Volumes
- REST APIs
- Persistent Storage
- Container Communication
- Public Tunneling

---

# 🚀 Future Improvements

- JWT Authentication
- User Accounts
- GitHub Actions CI/CD
- Docker Hub Integration
- AWS EC2 Deployment
- Kubernetes Deployment
- Nginx Reverse Proxy
- HTTPS Custom Domain
- Monitoring with Prometheus & Grafana

---

# 📸 Screenshots

## Dashboard UI

- Modern Dark Theme
- Task Cards
- Real-time Stats
- Responsive Layout

(Add screenshots here)

---

# ☁️ Production Deployment Plan

```text
GitHub
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
