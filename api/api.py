import time
from flask import Flask, request, jsonify
from pymongo import MongoClient
from user.models import User
from database import get_db
from flask_cors import CORS

app = Flask(__name__)
CORS(app, resources={r"/*": {"origins": "http://localhost:3000"}})


db = get_db()

# Temporary lookup for CO2 values for predefined items (e.g., car, pickup, tree)
co2_lookup = {
    "car": 100,
    "pickup": 150,
    "tree": -50
}

@app.route('/calculate', methods=["POST"])
def calculate():
    data = request.get_json()
    net_co2 = 0
    user_defined_dict = {item['id']: item['value'] for item in data['userDefined']}
    # Loop through the selected items and calculate net CO2
    for selected_item in data['selected']:
        item_id = selected_item['id']
        count = int(selected_item['count'])
        if item_id in user_defined_dict:
            co2_value = int(user_defined_dict[item_id])
        else:
            co2_value = co2_lookup.get(item_id, 0) # Default to 0
        net_co2 += co2_value * count
    return {'net_yearly': net_co2}

@app.route('/time')
def get_current_time():
    return {'time': time.time()}

@app.route('/user/signup', methods=['POST'])
def signup():
    return User(db).signup()

@app.route('/user/login', methods=['POST'])
def login():
    return User(db).login()

