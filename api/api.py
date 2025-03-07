import time
from flask import Flask

app = Flask(__name__)

@app.route('/calculate', methods=["POST"])
def calculate():
    return {'net_yearly': 42}

@app.route('/time')
def get_current_time():
    return {'time': time.time()}