#!/bin/bash

echo""
echo""
echo " ************************************ "
echo " *** Launching PLP for PRODUCTION *** "
echo " ************************************ "
echo""


echo "Composing up ... "
echo""
# execute docker-compose
docker-compose -f docker-compose.yml -f production.yml up -d

echo""
echo""
#overview of launched containers
docker ps
echo""