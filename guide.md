# Installation

## Install Python
Download [python 3.X](https://www.python.org/downloads/). Version 3.9 or higher is necessary.

## Install Node.js
[Download](https://nodejs.org/en) and run the installer.

# Repository Setup

## Flask
Now you'll create a python virtual environment. This will hold flask. From the /api directory, run
```powershell
python -m venv venv
.\venv\Scripts\activate
(venv) pip install flask python-dotenv
```

# Testing

To run the next commands, you might need to run this as administrator: 
```powershell
Set-ExecutionPolicy RemoteSigned
```

## Start the React app
Open terminal/powershell, and run 
```bash
yarn start
```
Say yes to any files it needs. 
After starting, the frontend can be viewed at http://localhost:3000/

## Start the Flask Backend
Open terminal/powershell, and run 
```bash
yarn start-api
```
Say yes to any files it needs.
After starting, the backend can be viewed at http://localhost:5000/ROUTE
