pipeline {
  agent any
  stages {
    stage('Check out code') {
      steps {
        git(url: 'https://github.com/Achanandhi-M/Web-Application-project.git', branch: 'main')
      }
    }

    stage('Build') {
      steps {
        sh 'sudo docker build -t myapp .'
      }
    }

    stage('Push to Dockerhub') {
      steps {
        script {
          withCredentials([usernamePassword(credentialsId: 'dockerhub-password', usernameVariable: 'DOCKERHUB_USER', passwordVariable: 'DOCKERHUB_PASSWORD')]) {
            sh 'sudo docker login -u $DOCKERHUB_USER -p $DOCKERHUB_PASSWORD'
            sh 'sudo docker tag myapp:latest achanandhi/quoteswebapp:myquotesv4'
            sh 'sudo docker push achanandhi/quoteswebapp:myquotesv4'
          }
        }
      }
    }
  }
}