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
        stage('Start Appium') {
            steps {
                sh '''
                    export ANDROID_HOME=/usr/lib/android-sdk
                    export ANDROID_SDK_ROOT=/usr/lib/android-sdk
                    pkill -f appium || true
                    sleep 2
                    appium server --port 4723 --base-path /wd/hub --use-plugins=device-farm --plugin-device-farm-platform=android &
                    sleep 10
                '''
            }
        }
        stage('Run Tests') {
            steps {
                sh '''
                    export APPIUM_HOST=localhost
                    export APPIUM_PORT=4723
                    node test.js
                '''
            }
        }
    }
}
