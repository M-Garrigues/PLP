# Set the base image
ARG TAGJENKINS
FROM jenkins/jenkins:lts-alpine

# Set working directory
WORKDIR /home/jenkins

USER root
#Install docker client
RUN curl -fsSLO https://get.docker.com/builds/Linux/x86_64/docker-17.04.0-ce.tgz \
  && tar xzvf docker-17.04.0-ce.tgz \
  && mv docker/docker /usr/local/bin \
  && rm -r docker docker-17.04.0-ce.tgz

#USER jenkins

#CMD ls /var/jenkins_home
#COPY plp_jenkins:/var/jenkins_home/secrets/initialAdminPassword .