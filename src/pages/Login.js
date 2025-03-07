import logo from '../logo.svg';
import { useState } from 'react';
import '../App.css';

function Login() {
	const [username, setUsername] = useState('');
	const [password, setPassword] = useState('');
	function checkLogin() {

	}

	return (
		<div className="login">
			<header>GreenGauge Login</header>
			<br />
			<br />
			<br />
			<br />
			<br />
			<br />
			<br />
			<br />
			<label className="inputbox">
				Username:
				<input value={username} onChange={e => setUsername(e.target.value)} />
			</label>
			<br/>
			<label className="inputbox">
				Password:
				<input value={password} onChange={e => setPassword(e.target.value)} />
			</label>
			<br/>
			<button onClick={checkLogin}>Log In</button>
		</div>
	);
}

export default Login;