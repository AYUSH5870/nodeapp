# nodeapp
# My Node.js Application on Kubernetes

This repository demonstrates deploying a simple Node.js application on Kubernetes.

**Project Structure:**

* **index.js:** The main application file (a basic Express server in this example).
* **package.json:** Project dependencies and metadata.
* **Dockerfile:** Instructions for building the Docker image.
* **deployment.yaml:** Kubernetes deployment configuration.
* **service.yaml:** Kubernetes service configuration.

**Prerequisites:**

* **Kubernetes Cluster:** You need a running Kubernetes cluster (e.g., Minikube, Google Kubernetes Engine, Amazon EKS).
* **kubectl:** The Kubernetes command-line tool.
* **Docker:** Docker for building and pushing the Docker image.
* **Docker Hub or a Container Registry:** To store your Docker image.

**Steps:**

1. **Build and Push Docker Image:**

   ```bash
   docker build -t <your-docker-image-name> . 
   docker push <your-docker-image-name>
