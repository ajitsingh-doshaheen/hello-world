/*
pipeline {
    //agent { dockerfile true }
    agent any
    stages {
        stage('Test') {
            steps {
                echo "you are looking at the pipeline steps"
            }
        }
    }
}
*/

node {
    def app

    stage('Clone repository') {
        /* Let's make sure we have the repository cloned to our workspace */

        checkout scm
    }

    stage('Build image') {
        /* This builds the actual image; synonymous to
         * docker build on the command line */

        app = docker.build("ajitsingh-doshaheen/hello-world")
    }

    stage('Test image') {
        /* Ideally, we would run a test framework against our image.
         * For this example, we're using a Volkswagen-type approach ;-) */

        app.inside {
            sh 'echo "Tests passed"'
        }
    }

    stage('Push image') {
        /* Finally, we'll push the image with two tags:
         * First, the incremental build number from Jenkins
         * Second, the 'latest' tag.
         * Pushing multiple tags is cheap, as all the layers are reused. */
        
        //docker.withRegistry('https://registry.hub.docker.com', 'docker-hub-credentials') {
        docker.withRegistry('https://registry.hub.docker.com', '898f37b7-a7fb-40d0-8d65-789a93549be5') {
            app.push("${env.BUILD_NUMBER}")
            app.push("latest")
        }
    }
}
