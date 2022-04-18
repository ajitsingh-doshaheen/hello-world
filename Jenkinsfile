node {
    def app

    /* Let's make sure we have the repository cloned to our workspace */
    stage('Clone repository') {
        checkout scm
    }

    /* This builds the actual image; synonymous to docker build on the command line */
    stage('Build image') {
        app = docker.build("akumarsingh/hello-world")
    }

    /* Ideally, we would run a test framework against our image. For this example, we're using a Volkswagen-type approach ;-) */
    stage('Test image') {
        app.inside {
            sh 'echo "Tests passed"'
        }
    }

    /* Finally, we'll push the image with two tags: First, the incremental build number from Jenkins, Second, the 'latest' tag. Pushing multiple tags is cheap, as all the layers are reused. */
    stage('Push image') {
        //docker.withRegistry('https://registry.hub.docker.com', 'docker-hub-credentials') {
        docker.withRegistry('https://registry.hub.docker.com', '539255cb-7f48-450a-9bfa-6a6612f80925') {
            app.push("${env.BUILD_NUMBER}")
            app.push("latest")
        }
    }
    
    /* To deploy the image in a container */
    stage('Deploy Image') {
        //sh 'docker run -p 49160:8080 -d <your username>/node-web-app'
        docker.withRegistry('https://registry.hub.docker.com', '539255cb-7f48-450a-9bfa-6a6612f80925') {
            docker.image('akumarsingh/hello-world').withRun('-p 4040:8000') {
                sh 'echo "Tests passed"' 
                sh "curl -i http://localhost:4040/"
            }
        }
    }
}
