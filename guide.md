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

## Start the React app
Open terminal/powershell, and run 
```bash
yarn start
```
Say yes to any files it needs. 

## Start the Flask Backend
Open terminal/powershell, and run 
```bash
yarn start-api
```
Say yes to any files it needs.
