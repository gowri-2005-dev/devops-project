# DevOps CI/CD Pipeline for Node.js Application

## Project Overview

This project demonstrates a basic DevOps CI/CD workflow for a Node.js application.

The application is stored in GitHub, containerized using Docker, automated using Jenkins, and deployed to Kubernetes using Minikube.

## Project Workflow
The workflow of the project is

Node.js Application 
↓
GitHub
↓
Jenkins
↓
Docker
↓
Kubernetes
↓
AWS (Future Deployment)

## Technologies Used
1. Node.js    → Runs the Application
2. Git/GitHub → Manages and stores the source code
3. Docker     → Packages the application into a container
4. Jenkins    → Automates the CI/CD pipeline
5. Kubernetes → Deploys and manages the containers
6. Minikube   → Provides a local kubernetes cluster
7. AWS        → Planned final cloud deployment

## Project Structure
devops-project/
 - app/
 - Dockerfile
 - Jenkinsfile
 - deployment.yaml
 - service.yaml
 - README.md

## Docker
Docker is used to containerize the Node.js application.

A `Dockerfile` is used to create the Docker image.

Docker image:
`devops-node-app:latest`

The Docker Image contains the Node.js application and its required dependencies.

## Jenkins
Jenkins is used to automate the CI/CD pipeline of the project.

The Jenkins pipeline performs the following steps:
1. Checkout the source code from GitHub
2. Build the Docker image
3. Verify the Docker image
4. Deploy the application to Kubernetes

The pipeline configuration is defined in the `Jenkinsfile`.

### Jenkins Pipeline Flow
GitHub → Jenkins → Docker → Kubernetes

## Kubernetes
Kubernetes is used to deploy and manage the application containers.

Minikube is used as the local Kubernetes cluster.

### Deployment
The `deployment.yaml` file defines the Kubernetes Deployment for the Node.js application.

It specifies the application container and maintains two replicas.

### Service
The `service.yaml` file creates a Kubernetes Service to expose the application.

## CI/CD Pipeline
The CI/CD pipeline automates the process of building and deploying the application.

The pipeline works as follows:

GitHub
   ↓
Jenkins
   ↓
Docker Image
   ↓
Kubernetes
   ↓
Application

Jenkins checks out the source code from GitHub, builds the Docker image, verifies the image, and deploys the application to Kubernetes.

## Challenges and Solutions

### Jenkins and Kubernetes Integration
During the Jenkins pipeline execution, the Kubernetes deployment stage initially failed because the Jenkins user could not access the Kubernetes configuration and Minikube certificates.

The issue was resolved by:

1. Creating a Kubernetes configuration for the Jenkins user
2. Copying the required Minikube certificates
3. Updating the certificate paths in the Jenkins kubeconfig
4. Assigning ownership of the required files to the Jenkins user
5. Verifying Kubernetes access using `kubectl get nodes`

After these changes, Jenkins was able to communicate with the Kubernetes cluster and the pipeline completed successfully.

## Future Scope
The next stage of this project is to deploy the application to AWS and extend the CI/CD pipeline for cloud deployment.

## Conclusion
This project provided practical experience with:

- Git and GitHub
- Docker
- Jenkins CI/CD
- Kubernetes
- Minikube
- DevOps workflow
- Troubleshooting and deployment
Jenkins SCM Polling configured successfully.
