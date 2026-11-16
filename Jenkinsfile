pipeline {
    agent any

    stages {

        stage('Checkout') {
            steps {
                git branch: 'main',
                    url: 'https://github.com/YOUR_USERNAME/jenkins-ec2-demo.git'
            }
        }

        stage('Deploy') {
            steps {
                echo 'Deployment configuration will be added here'
            }
        }
    }
}
