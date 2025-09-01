pipeline {
    agent any

    environment {
        SONAR_HOST_URL = 'http://localhost:9001'
        SONAR_TOKEN = credentials('Simple-Express-App') 
    }

    stages {
        stage('Checkout') {
            steps {
                git branch: 'feature/lab', url: 'https://github.com/6510110132-natcha/simple-express-app.git'
            }
        }

        stage('Build') {
            steps {
                sh 'npm install'
            }
        }

        stage('SonarQube Scan') {
            steps {
                sh '''
                docker run --rm \
                    -v ${PWD}:/usr/src \
                    -v sonar_cache:/root/.sonar/cache \
                    sonarsource/sonar-scanner-cli \
                    -Dsonar.projectKey=simple-express-app \
                    -Dsonar.sources=. \
                    -Dsonar.host.url=$SONAR_HOST_URL \
                    -Dsonar.login=$SONAR_TOKEN
                '''
            }
        }

        stage('Quality Gate') {
            steps {
                timeout(time: 5, unit: 'MINUTES') {
                    waitForQualityGate abortPipeline: true
                }
            }
        }
    }
}
