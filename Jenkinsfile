pipeline {
    agent any 
    environment {
    DOCKERHUB_CREDENTIALS = credentials('alfredogames26123-dockerhub')
    }
    stages { 
        stage('SCM Checkout') {
            steps{
            git 'https://github.com/alfredogames26123/nodejs-demo.git'
            }
        }

        stage('Build docker image') {
            steps {  
                sh 'docker build -t alfredogames26123/nodeapp:$BUILD_NUMBER .'
            }
        }
        stage('login to dockerhub') {
            steps{
                // Jenkins credentials() automatically exposes <VAR>_USR and <VAR>_PSW
                // for username/password credentials; --password-stdin avoids exposing secrets in logs
                sh 'echo $DOCKERHUB_CREDENTIALS_PSW | docker login -u $DOCKERHUB_CREDENTIALS_USR --password-stdin'
            }
        }
        stage('push image') {
            steps{
                sh 'docker push alfredogames26123/nodeapp:$BUILD_NUMBER'
            }
        }
}
post {
        always {
            // Ensure Docker registry session is cleared regardless of pipeline success or failure
            sh 'docker logout'
        }
    }
}

