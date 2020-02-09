#!/bin/bash

echo""
echo""
echo " ************************************ "
echo " ** Launching PLP for DEVELOPMENT  ** "
echo " ************************************ "
echo""
echo""


echo "Composing up... "
echo""
# execute docker-compose
docker-compose -f docker-compose.yml -f development.yml up -d

echo""
echo""

sleep 4
#overview of launched containers
docker ps
echo""
echo""
echo "Traefik log :"
docker logs plp_traefik_dev
echo""

sleep 4
#jenkins info
./jenkins.sh