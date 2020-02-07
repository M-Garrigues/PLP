# Set the base image
ARG TAG_JENKINS
FROM jenkins/jenkins:$TAG_JENKINS

# Set working directory
WORKDIR /home/jenkins

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
RUN apk add --update \
        make \
        gcc \
        g++ \
        musl-dev \
        libffi-dev \
        unixodbc-dev

# Install dependencies
RUN pip3 install ez_setup && easy_install -U setuptools
ADD requirements_jenkins.txt /app/
RUN pip3 install -r /app/requirements_jenkins.txt
CMD python --version && jupyter --version

USER jenkins
