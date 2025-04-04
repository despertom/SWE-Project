# api/database.py
from pymongo import MongoClient

def get_db():
    client = MongoClient('localhost', 27017)
    db = client.user_login_db
    return db
