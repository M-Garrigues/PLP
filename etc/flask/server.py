from flask import Flask
from pymongo import MongoClient
from bson.json_util import dumps

app = Flask(__name__)

@app.route('/matches')
def api():
 client = MongoClient("mongodb://plp_mongodb:27017")
 return dumps(client.test_matches.matches.find())

if __name__ == '__main__':
 app.run(debug=True)