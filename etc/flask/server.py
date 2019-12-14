from flask import Flask
from pymongo import MongoClient
from bson.json_util import dumps
from flask_cors import CORS

app = Flask(__name__)
CORS(app)

@app.route('/matches')
def api():
 client = MongoClient("mongodb://plp_mongodb:27017")
 return dumps(client.test_matches.matches.find())

if __name__ == '__main__':
 app.run(debug=True)