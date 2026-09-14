
pipeline {
    agent any

    environment {
        PATH = "C:\\Users\\ELCOT\\AppData\\Local\\Programs\\DockerDesktop\\resources\\bin;${env.PATH}"
        KUBECONFIG = "C:\\Users\\ELCOT\\.kube\\config"
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

        stage('Deploy to EC2') {
            steps {
                sshagent(['ec2-ssh']) {
                    bat '''
                    ssh -o StrictHostKeyChecking=no ec2-user@13.232.241.219 "cd ~/devops-project && git pull origin main && docker stop devops-container || true && docker rm devops-container || true && docker build -t devops-node-app . && docker run -d --name devops-container -p 3000:3000 devops-node-app"
                    '''
                }
            }
        }
    }
}
