# Installation

## Install Python
Download [python 3.X](https://www.python.org/downloads/). Version 3.9 or higher is necessary.

## Install Node.js
[Download](https://nodejs.org/en) and run the installer.

# Repository Setup

## Flask
Now you'll create a python virtual environment. This will hold flask. From the project root, run
```powershell
cd api
python -m venv venv
.\venv\Scripts\activate
```
With venv activated, run
```powershell
pip install flask python-dotenv
```

## React

To run the next yarn commands, you might need to run this as administrator: 
```powershell
Set-ExecutionPolicy RemoteSigned
```

Run the following to install dependencies of the project.
```powershell
yarn install
```

# Testing

## Start the Flask Backend
Open terminal/powershell, and run 
```bash
yarn start-api
```
Say yes to any files it needs.
After starting, the backend can be viewed at http://localhost:5000/ROUTE

## Start the React app
Open terminal/powershell, and run 
```bash
yarn start
```
Say yes to any files it needs. 
After starting, the frontend can be viewed at http://localhost:3000/
