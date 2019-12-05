#!/bin/bash

echo""
echo""
echo " ************************************ "
echo " ** Launching PLP for DEVELOPMENT  ** "
echo " ************************************ "
echo""
echo""


echo "Composing up... "
# execute docker-compose
docker-compose -f docker-compose.yml -f development.yml up -d

echo""
echo""
#overview of launched containers
docker ps