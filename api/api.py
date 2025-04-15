import time
from flask import Flask, request, jsonify
from pymongo import MongoClient
from user.models import User
from database import get_db
from flask_cors import CORS

app = Flask(__name__)
CORS(app, resources={r"/*": {"origins": "http://localhost:3000"}})


db = get_db()

# Yearly values of CO2 kg/year
co2_lookup = {
    # Home & Energy
    "Electricity (average household)": 3000,  # EPA estimate: ~0.4 kg CO2/kWh, ~7,500 kWh/year
    "Natural gas heating": 2500,  # Based on 12,000 kWh/year at ~0.2 kg CO2/kWh (Carbon Trust)
    "Oil heating": 3200,  # UK average: 2,500 liters/year × 2.52 kg CO2/liter (Carbon Trust)
    "Wood stove": 300,  # Low net emissions; estimate from EPA for moderate use
    "LED lighting (whole house)": 150,  # Low usage, assumes efficient lighting ~350 kWh/year
    "Old refrigerator": 500,  # 1000 kWh/year × 0.5 kg CO2/kWh (older models)
    "New Energy Star refrigerator": 150,  # 300 kWh/year × 0.5 kg CO2/kWh
    "Water heating (electric)": 1800,  # ~4,500 kWh/year × 0.4 kg CO2/kWh (EPA)
    "Clothes dryer (electric)": 300,  # ~750 kWh/year × 0.4 kg CO2/kWh
    "Air conditioning (central)": 2000,  # 5,000 kWh/year (hot climates) × 0.4 kg CO2/kWh

    # Transportation
    "Driving (petrol car, 15,000 km/year)": 3500,  # ~0.23 kg CO2/km (EPA/Carbon Footprint)
    "Driving (hybrid car)": 1500,  # ~0.1 kg CO2/km
    "Driving (EV with coal electricity)": 2000,  # ~0.15 kg CO2/km using coal grid
    "Driving (EV with renewable electricity)": 500,  # ~0.03 kg CO2/km with green grid
    "Public transit (bus)": 800,  # ~0.05 kg CO2/km, 15,000 km/year
    "Train travel (regional)": 400,  # ~0.03 kg CO2/km (Our World in Data)
    "Domestic flight (one round-trip)": 400,  # 400 kg CO2 per round-trip (UK DEFRA)
    "International flight (one round-trip)": 2500,  # 2,500 kg for long-haul (Our World in Data)
    "Motorcycle (6,000 km/year)": 1000,  # ~0.17 kg CO2/km (Carbon Footprint Ltd.)
    "Bicycle commuting": 0,  # No fuel emissions

    # Consumption & Shopping
    "New smartphone (manufacturing)": 70,  # Apple/Google environmental reports
    "New laptop": 200,  # Rough average from Dell/HP lifecycle analyses
    "New TV": 400,  # 300–600 kg range depending on size (Carbon Trust)
    "Clothing (average person per year)": 400,  # WRAP (UK) clothing emissions estimate
    "Online shopping (shipping)": 300,  # Estimated from delivery logistics per capita
    "Furniture purchase": 500,  # Varies; large item + materials (e.g., IKEA sustainability data)
    "Fast fashion (high consumption)": 1000,  # Based on high purchase frequency (UN Environment)
    "Second-hand clothing": 50,  # Very low emissions; excludes manufacturing

    # Food & Diet
    "Meat-heavy diet": 2500,  # ~7 kg CO2e/day (Poore & Nemecek, 2018 study)
    "Vegetarian diet": 1700,  # ~4.5 kg CO2e/day (same study)
    "Vegan diet": 1000,  # ~2.7 kg CO2e/day (Poore & Nemecek, Our World in Data)
    "Beef (1 kg per week)": 1500,  # ~30 kg CO2e/kg beef × 50 weeks (very high intensity)
    "Chicken (1 kg per week)": 500,  # ~10 kg CO2e/kg × 50 weeks
    "Cheese (0.5 kg/week)": 600,  # ~23 kg CO2e/kg (high for dairy)
    "Milk (1 liter/day)": 400,  # ~1.2 kg CO2e/liter × 365 days
    "Processed food consumption (high)": 600,  # Industrial emissions estimate (FAO/WWF)
    "Local organic food (low packaging)": 200,  # Lower food miles and lower inputs
    "Food waste (average household)": 600,  # Average US household waste impact (EPA/FAO)

    # Lifestyle & Services
    "Hotel stay (30 nights/year)": 1500,  # ~50 kg CO2/night (energy, laundering, HVAC)
    "Streaming video (2 hrs/day)": 300,  # ~0.2 kg/hr with cloud impact (IEA estimates)
    "Gaming console (2 hrs/day)": 200,  # ~0.15–0.25 kg/hr (depends on console; NRDC)
    "Cloud storage usage (heavy)": 150,  # Data centers (est. 10–15 kg/month heavy use)
    "Pet ownership (medium dog)": 700,  # Pet food & vet care (carbonpawprint.com, NRDC)
    "Gym membership": 300,  # Includes transport, electricity, equipment lifecycle
    "Commuting by rideshare (10 km/day)": 1000,  # 0.2 kg/km × 5,000 km/year
    "Work from home": 500,  # Extra heating + electricity usage estimate (IEA, UK BEIS)
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

@app.route('/getoptions')
def get_options():
    keyList = [key for key in co2_lookup.keys()]
    return {'options': keyList}

@app.route('/user/signup', methods=['POST'])
def signup():
    return User(db).signup()

@app.route('/user/login', methods=['POST'])
def login():
    return User(db).login()

