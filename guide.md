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
With venv activated, run this command in PowerShell:
```powershell
pip install flask python-dotenv pymongo
```

Download MongoDB service, keep default settings: 
https://www.mongodb.com/try/download/community

*make sure to run MongoDB service before starting flask*

## React

To run the next yarn commands, you might need to run this as administrator in PowerShell: 
```powershell
Set-ExecutionPolicy RemoteSigned
```

You may need to install yarn. If you do not have the yarn command, follow the guide [here](https://classic.yarnpkg.com/lang/en/docs/install/#windows-stable) to install it. You should be able to use NPM.

Using PowerShell, run this command inside of the project directory to install dependencies of the project:
```powershell
yarn install
```

# Testing

## Start the Flask Backend
Open PowerShell in the project directory, and run 
```bash
yarn start-api
```
Say yes to any files it needs.
After starting, the backend can be viewed at http://localhost:5000/ROUTE

## Start the React app
Open PowerShell in the project directory, and run 
```bash
yarn start
```
Say yes to any files it needs. 
After starting, the frontend can be viewed at http://localhost:3000/

# Contributing
## React
You will be working in the src folder. 
## Flask / MongoDB
You will be working inside the api folder.
