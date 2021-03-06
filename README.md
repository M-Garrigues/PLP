# PLP
A decision-making aid for sportive bets, which uses Machine Learning and Statistics to help you get the best out of your bets.

# Launch the project


#### Dev environment

Run: `docker-compose -f docker-compose.yml -f development.yml up -d`


#### Prod environment

Run: `docker-compose -f docker-compose.yml -f production.yml up -d`

# CI

#### Jenkins

Initialisation :
* Jenkins server at _plp_jenkins.IPAddress_ on port _8080_
* Connect to Jenkins server with initial admin password in plp_jenkins:/var/jenkins_home/secrets/initialAdminPassword
* Install recommended plugins (pipeline plugin necessary)

Create two items :
* Odds :
    * Build triggers
        * Build Periodically : `H * * * *` _(every hour)_
    * Pipeline
        * Definition : `Pipeline Scipt from SCM`
        * SCM : `Git`
        * Repository URL : `https://github.com/M-Garrigues/PLP.git`
        * Branches to build : _select adequate branch_
        * Script Path : `etc/jenkins/Jenkinsfile.odss`
        
* ML :
    * Build triggers
        * Build Periodically : `H 2 1,8,15,22,28 * *` _(once a week at 2 am)_
    * Pipeline
        * Definition : `Pipeline Scipt from SCM`
        * SCM : `Git`
        * Repository URL : `https://github.com/M-Garrigues/PLP.git`
        * Branches to build : _select adequate branch_
        * Script Path : `etc/jenkins/Jenkinsfile.getDatas`
    






