import time
from flask import Flask, request, jsonify
from pymongo import MongoClient
from user.models import User
from database import get_db

app = Flask(__name__)

db = get_db()

@app.route('/time')
def get_current_time():
    return {'time': time.time()}

@app.route('/user/signup', methods=['POST'])
def signup():
    return User(db).signup()

