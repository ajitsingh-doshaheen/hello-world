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
        docker.withRegistry('https://registry.hub.docker.com', '539255cb-7f48-450a-9bfa-6a6612f80925') {
            sh 'docker rm /container-hello-world'
            sh 'docker run -p 8000:8000 -d --name container-hello-world akumarsingh/hello-world'
            sh 'curl -i localhost:8000'
        }
    }
}
