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

* **Kubernetes Cluster:** You need a running Kubernetes cluster 
* **kubectl:** The Kubernetes command-line tool.
* **Docker:** Docker for building and pushing the Docker image.
* **Docker Hub or a Container Registry:** To store your Docker image.

**Steps:**

## 1.Node.js Application:
   -Ensure you have a basic Node.js application (e.g., an Express server).
   -Create a package.json file with your dependencies (e.g., Express, dependencies for your application).
   -Create a Dockerfile to build your container image:

   ```
   FROM node:latest

   WORKDIR /usr/src/app

   COPY package.json ./

   RUN npm install

   COPY . .

   EXPOSE 4000
   CMD [ "node", "index.js" ]
    ```
## 2.Build the Docker image and tag the version:
```
    docker build -t ak5870/nodeapp .
```
## 3.Push the image to Docker hub
```
    docker push ak5870/nodeapp
```
## 4.Create Kubernetes Resources

   **-Create deployment.yaml**:
   ```
   apiVersion: apps/v1
   kind: Deployment
   metadata:
   name: nodeapp-deployment
   labels:
    app: nodeapp
   spec:
    replicas: 1
    selector:
     matchLabels:
      app: nodeapp
   template:
    metadata:
      labels:
        app: nodeapp 
    spec:
      containers:
      - name: nodeserver
        image: thetips4you/nodeapp:latest
        ports:
        - containerPort: 3000
   ```
**-Create service.yaml**:
```
apiVersion: v1
kind: Service
metadata:
  name: nodeapp-service
spec:
  selector:
    app: nodeapp 
  type: LoadBalancer
  ports:
  - protocol: TCP
    port: 5000
    targetPort: 3000
    nodePort: 31110
```
   



   
