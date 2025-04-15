import React, { useState, useEffect } from 'react';
import '../App.css';
import { Link } from "react-router-dom";
import nature from '../img/nature.jpg'

function Home() {
	return (
		<div className="home">
			<h1>Welcome to GreenGauge</h1>
			<div className="buttons">
				<Link to="/signup">Signup</Link>
				<Link to="/login">Login</Link>
				<Link to="/info">Info</Link>
				<Link to="/calculator">Calculator</Link>
			</div>
		</div>
	);
}

export default Home;