# 🚀 CI/CD Pipeline — Jenkins · Docker · Kubernetes

A complete **CI/CD pipeline** that takes a Node.js app from source to a running container image: **Jenkins** builds a **Docker** image on every commit, pushes it to Docker Hub, and **Kubernetes** manifests deploy it behind a LoadBalancer service.

> 👥 Group project by **Aziz BENAYED** and **Alfredo Rodriguez**.

---

## 🔄 The pipeline

Defined in [`Jenkinsfile`](Jenkinsfile) — four stages:

```
 SCM checkout ──▶ docker build ──▶ docker login ──▶ docker push
 (Git)            (image :BUILD)   (Docker Hub)      (registry)      ──▶ docker logout (always)
```

1. **SCM Checkout** — pull the app from Git
2. **Build** — `docker build -t <repo>/nodeapp:$BUILD_NUMBER .`
3. **Login** — authenticate to Docker Hub using Jenkins-managed credentials (never hard-coded)
4. **Push** — publish the tagged image; `post { always { docker logout } }` cleans up

---

## 📦 The app

A minimal **Express** service ([`nodeapp/index.js`](nodeapp/index.js)) with health-style endpoints — perfect for demonstrating the pipeline end to end:

| Route | Response |
|-------|----------|
| `/` | welcome JSON |
| `/will` | `Hello World` |
| `/ready` | readiness check |

Tested with **Mocha + Supertest**; containerized via the [`Dockerfile`](Dockerfile) (Node, port 3000).

---

## ☸️ Kubernetes

[`nodeapp/deployment.yml`](nodeapp/deployment.yml) + [`nodeapp/service.yml`](nodeapp/service.yml) deploy the image and expose it via a **LoadBalancer** (port 5000 → container 3000).

```bash
kubectl apply -f nodeapp/deployment.yml
kubectl apply -f nodeapp/service.yml
```

---

## 🖥️ Run the app locally

```bash
cd nodeapp && npm install && npm start   # http://localhost:3000
# or with Docker:
docker build -t nodeapp . && docker run -p 3000:3000 nodeapp
```

📄 A full step-by-step walkthrough (with screenshots) is in [`docs/PIPELINE_WALKTHROUGH.md`](docs/PIPELINE_WALKTHROUGH.md).

---

## 🛠️ Tech Stack

![Jenkins](https://img.shields.io/badge/Jenkins-D24939?style=flat-square&logo=jenkins&logoColor=white)
![Docker](https://img.shields.io/badge/Docker-2496ED?style=flat-square&logo=docker&logoColor=white)
![Kubernetes](https://img.shields.io/badge/Kubernetes-326CE5?style=flat-square&logo=kubernetes&logoColor=white)
![Node.js](https://img.shields.io/badge/Node.js-339933?style=flat-square&logo=nodedotjs&logoColor=white)

Jenkins · Docker · Docker Hub · Kubernetes · Node.js/Express · Mocha

---

## 📚 What this project demonstrates

- Building an automated **CI/CD pipeline** (build → test → containerize → publish)
- **Docker** image creation and registry workflow
- **Kubernetes** deployment + service exposure
- Secure credential handling via Jenkins (no secrets in code)

---

## 📄 License

Released under the [MIT License](LICENSE).
