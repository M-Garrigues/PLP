# Set the base image
FROM jenkins/jenkins:lts

# Set working directory
#WORKDIR /home/jenkins

# Install app dependencies
USER root
RUN apt-get -y update && apt-get -y upgrade
RUN apt-get install -y python-pip
RUN pip install --upgrade pip

ADD requirements_jenkins.txt /app/
RUN pip install -r /app/requirements_jenkins.txt

USER jenkins
# Run shell command for jenkins on start
#CMD jupyter notebook --port=8888 --no-browser --ip=0.0.0.0 --allow-root

#CMD ls /var/jenkins_home

#COPY plp_jenkins:/var/jenkins_home/secrets/initialAdminPassword .