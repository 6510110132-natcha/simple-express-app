pipeline {
    agent any

    tools {
        nodejs 'nodejs-lts'  // ใช้ชื่อที่ตั้งไว้ใน Global Tool Configuration
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

        stage('Test') {
            steps {
                sh 'node test.js'
            }
        }

        stage('SonarQube Scan') {
            steps {
                withSonarQubeEnv('SonarQube') {
                    sh 'npx sonar-scanner'
                }
            }
        }

        stage('Quality Gate') {
            steps {
                timeout(time: 10, unit: 'MINUTES') {
                    waitForQualityGate abortPipeline: true
                }
            }
        }
    }
}
