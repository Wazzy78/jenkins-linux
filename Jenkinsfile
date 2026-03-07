pipeline {
    agent {
        label 'appium-node'
    }
    stages {
        stage('Checkout') {
            steps {
                git branch: 'main',
                    url: 'https://github.com/Wazzy78/jenkins-linux.git'
            }
        }
        stage('Install Dependencies') {
            steps {
                sh 'npm install webdriverio'
            }
        }
        stage('Run Tests') {
            steps {
                sh 'node test.js'
            }
        }
    }
}

