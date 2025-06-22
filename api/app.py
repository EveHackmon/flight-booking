from flask import Flask, jsonify
from pymongo import MongoClient
import os
app = Flask(__name__)

MONGO_URI = os.environ["MONGO_URI"]
client = MongoClient(MONGO_URI)
db = client.get_database() # uses default from URI
items_collection = db["items"]

@app.route("/items")
def get_items():
    items = list(items_collection.find({}, {"_id": 0}))
    return jsonify(items)