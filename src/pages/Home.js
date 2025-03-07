import React, { useState, useEffect } from 'react';
import logo from '../logo.svg';
import '../App.css';

function Home() {
	const [currentTime, setCurrentTime] = useState(0);

	useEffect(() => {
		fetch('/time').then(res => res.json()).then(data => {
			setCurrentTime(data.time);
		});
	}, []);

	return (
		<div className="home">
			<h1>Home</h1>
			<p>Time from flask: {currentTime}.</p>
		</div>
	);
}

export default Home;