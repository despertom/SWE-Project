from flask import jsonify, request
from bson.objectid import ObjectId


class User:
    def __init__(self, db):
        self.db = db

    def signup(self):
        data = request.get_json()  # Get the JSON data from the request body
        if not data or 'username' not in data or 'password' not in data:
            return jsonify({'message': 'Missing username or password'}), 400

        username = data['username']
        password = data['password']

        # Check if username already exists
        existing_user = self.db.users.find_one({'username': username})
        if existing_user:
            return jsonify({'message': 'Username already exists'}), 409 # 409 Conflict

        user = {
            'username': username,
            'password': password
        }

        result = self.db.users.insert_one(user)
        inserted_user = self.db.users.find_one({"_id": result.inserted_id})
        inserted_user['_id'] = str(inserted_user['_id'])  # convert the id to a string

        return jsonify(inserted_user), 201 
    
    def login(self):
        data = request.get_json()
        if not data or 'username' not in data or 'password' not in data:
            return jsonify({'message': 'Missing username or password'}), 400

        username = data['username']
        password = data['password']

        user = self.db.users.find_one({'username': username, 'password': password})
        if user:
            user['_id'] = str(user['_id'])
            return jsonify(user), 200
        else:
            return jsonify({'message': 'Invalid username or password'}), 401
