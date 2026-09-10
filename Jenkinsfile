pipeline {
    agent any
     environment {
        PATH = "C:\\Users\\ELCOT\\AppData\\Local\\Programs\\DockerDesktop\\resources\\bin;${env.PATH}"
    }
    stages {
        stage('Checkout') {
           steps {
               checkout scm
           }
        }
        stage('Build Docker Image') {
           steps {
               bat 'docker buildx build -t devops-node-app --load .'
           }
        }
        stage('Verify Docker Image') {
           steps {
               bat 'docker images devops-node-app'
           }
        }
        stage('Kubernetes Deployment') {
           steps {
               bat 'kubectl apply -f deployment.yaml'
               bat 'kubectl apply -f service.yaml'
           }
        }
    }
}

