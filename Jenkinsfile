pipeline {
    agent any
    stages {
        stage('Checkout') {
           steps {
               checkout scm
           }
        }
        stage('Build Docker Image') {
           steps {
               sh 'docker buildx build -t devops-node-app --load .'
           }
        }
        stage('Verify Docker Image') {
           steps {
               sh 'docker images devops-node-app'
           }
        }
        stage('Kubernetes Deployment') {
           steps {
               sh 'kubectl apply -f deployment.yaml'
               sh 'kubectl apply -f service.yaml'
           }
        }
    }
}

