# Set the base image
FROM jenkins/jenkins:lts
USER root

# Set working directory
#WORKDIR /home/jenkins

# Install app dependencies
RUN apt-get update
RUN apt-get install -y python-pip
RUN pip install --upgrade pip

ADD requirements_jenkins.txt /app/
RUN pip install -r /app/requirements_jenkins.txt

# Run shell command for notebook on start
#CMD jupyter notebook --port=8888 --no-browser --ip=0.0.0.0 --allow-root
#COPY plp_jenkins:/var/jenkins_home/secrets/initialAdminPassword .