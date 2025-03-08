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

        #TODO: add logic for username already exists

        user = {
            'username': username,
            'password': password
        }

        result = self.db.users.insert_one(user)
        inserted_user = self.db.users.find_one({"_id": result.inserted_id})
        inserted_user['_id'] = str(inserted_user['_id']) #convert the id to a string

        return jsonify(inserted_user),201 #201 is the preferred status code for creation.
