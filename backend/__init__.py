from flask import Flask
from flask_cors import CORS
from pymongo import MongoClient, InsertOne
from pymongo.mongo_client import MongoClient
from pymongo.server_api import ServerApi

app=Flask(__name__)
CORS(app)
uri = ""
client = MongoClient(uri, server_api=ServerApi('1'))
db=client['']

try:
    client.admin.command('ping')
    print("Pinged your deployment. You successfully connected to MongoDB!")
except Exception as e:
    print(e)

from backend import routes