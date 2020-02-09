#!/bin/bash

echo "Jenkins : http://$(docker inspect -f '{{range .NetworkSettings.Networks}}{{.IPAddress}}{{end}}' plp_jenkins):8080"
echo "Admin password : $(docker exec -it plp_jenkins cat /var/jenkins_home/secrets/initialAdminPassword)"

