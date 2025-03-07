import React, { useState, useEffect } from 'react';
import logo from '../logo.svg';
import '../App.css';
import { Link } from "react-router-dom";
import Home from './Home';
import Signup from './Signup';
import Login from './Login'

function Navbar() {
	return (
		<nav>
			<Link to="/">Home</Link>
			<Link to="/signup">Signup</Link>
			<Link to="/login">Login</Link>
			<Link to="/Info">Info</Link>
		</nav>
	);
}
function Info(){
    const myStyle = {
    color: "black",
    backgroundColor: "Green",
    padding: "10px",
    fontFamily: "Sans-Serif",
    textAlign: 'center'
  };
  return (
    <div>
      <body>
      <Navbar />
      <h1 style={myStyle}>Information Page</h1>
      <p style={{textAlign:'center'}}>GreenGauge is a carbon footprint calculator designed to calculate how much carbon your lifestyle produces in a year and allow you to compare your results with others.</p>
      </body>
    </div>
  );
}

export default Info;