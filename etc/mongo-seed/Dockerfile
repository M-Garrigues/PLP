FROM mongo

COPY plp_apibase.json /plp_apibase.json

CMD mongoimport --host plp_mongodb --db plp --collection apibase --type json --file /plp_apibase.json --jsonArray
