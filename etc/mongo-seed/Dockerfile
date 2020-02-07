FROM mongo

COPY plp_apibase.json /plp_apibase.json
COPY plp_match.json /plp_match.json
COPY plp_team.json /plp_team.json

CMD mongoimport --host plp_mongodb --db plp --collection apibase --type json --file /plp_apibase.json --jsonArray
CMD mongoimport --host plp_mongodb --db plp --collection match --type json --file /plp_match.json --jsonArray
CMD mongoimport --host plp_mongodb --db plp --collection team --type json --file /plp_team.json --jsonArray
