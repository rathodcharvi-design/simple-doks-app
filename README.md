# Simple Web DOKS Application – with Autoscaling

## Overview
This repository demonstrates how to deploy a simple Node.js web application on
**DigitalOcean Kubernetes (DOKS)** using Docker, Kubernetes manifests, and
**Horizontal Pod Autoscaling (HPA)** based on CPU utilization.

The setup showcases:
- Containerized application deployment
- Kubernetes Load Balancing
- Automatic scaling using Metrics Server and HPA
- Best practices for cloud-native applications

---

## Architecture Summary

**Flow:**
User → DigitalOcean Load Balancer → Kubernetes Service → Pods (Node.js app)

**Key Components:**
- **Docker**: Containerizes the Node.js app
- **DigitalOcean Container Registry**: Stores the application image
- **DOKS (Kubernetes)**: Orchestrates containers
- **Service (LoadBalancer)**: Distributes traffic across pods
- **Metrics Server**: Collects CPU metrics
- **HPA**: Scales pods based on CPU usage

---

## Prerequisites

- DigitalOcean account
- Docker installed and running
- `kubectl` installed
- `doctl` installed and authenticated
- Access to a DOKS cluster

---

## Application Files

| File | Purpose |
|-----|--------|
| `server.js` | Simple Node.js HTTP server |
| `Dockerfile` | Builds container image |
| `k8s.yaml` | Deployment + LoadBalancer Service |
| `hpa.yaml` | Horizontal Pod Autoscaler |
| `package.json` | Node.js app metadata |

---

## Build and Push Docker Image

```bash
docker buildx build \
  --platform linux/amd64 \
  -t registry.digitalocean.com/<your-registry>/simple-doks-app:1.0 \
  --push 
