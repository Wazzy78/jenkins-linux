pipeline {
    agent {
        label 'appium-node'
    }
    stages {
        stage('Install Dependencies') {
            steps {
                sh 'npm install webdriverio'
            }
        }
        stage('Start Appium') {
            steps {
                script {
                    sh 'pkill -f appium || true'
                    sh 'sleep 2'
                    sh 'export ANDROID_HOME=/usr/lib/android-sdk && export ANDROID_SDK_ROOT=/usr/lib/android-sdk && nohup /usr/bin/appium server --port 4723 --base-path /wd/hub --use-plugins=device-farm --plugin-device-farm-platform=android > /tmp/appium.log 2>&1 &'
                    sh 'sleep 15'
                    sh 'cat /tmp/appium.log'
                }
            }
        }
        stage('Run Tests') {
            steps {
                sh 'APPIUM_HOST=localhost APPIUM_PORT=4723 node test.js'
            }
        }
    }
}
