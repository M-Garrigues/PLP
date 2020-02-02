# Set the base image
FROM jenkins/jenkins:alpine

USER root

# Install Python 3
RUN apk add --no-cache python3 && \
 python3 -m ensurepip && \
 pip3 install --upgrade pip setuptools && \
 if [ ! -e /usr/bin/pip ]; then ln -s pip3 /usr/bin/pip ; fi && \
 if [[ ! -e /usr/bin/python ]]; then ln -sf /usr/bin/python3 /usr/bin/python; fi && \
 rm -r /root/.cache
RUN apk add pkgconf
RUN apk add build-base
RUN apk add python3-dev


# Install dependencies
ADD requirements_jenkins.txt /app/
RUN pip3 install -r /app/requirements_jenkins.txt
CMD python --version && jupyter --version


USER jenkins

#CMD ls /var/jenkins_home
#COPY plp_jenkins:/var/jenkins_home/secrets/initialAdminPassword .