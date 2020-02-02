# Set the base image
FROM jenkins/jenkins:lts

# Set working directory
#WORKDIR /home/jenkins

# Install app dependencies
USER root
RUN apt-get -y update && apt-get -y upgrade
RUN apt-get install -y python3-pip && pip3 --version
RUN pip3 install --upgrade pip3

ADD requirements_jenkins.txt /app/
RUN pip3 install -r /app/requirements_jenkins.txt
#CMD python --version && python -V
USER jenkins

#CMD ls /var/jenkins_home
#COPY plp_jenkins:/var/jenkins_home/secrets/initialAdminPassword .