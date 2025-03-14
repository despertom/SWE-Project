import logo from '../logo.svg';
import { useState } from 'react';
import '../App.css';

function Login() {
	const [username, setUsername] = useState('');
	const [password, setPassword] = useState('');
	function checkLogin() {
		// TODO send to server, if valid, proceed
	}

	return (
		<div class="login">
			<h1>Login</h1>
			<div class="field">
				<label>Username:</label>
				<input class="inputbox" value={username} onChange={e => setUsername(e.target.value)} />
			</div>
			<div class="field">
				<label>Password:</label>
				<input class="inputbox" value={password} type="password" onChange={e => setPassword(e.target.value)} />
			</div>
			<button onClick={checkLogin}>Log In</button>
		</div>
	);
}

export default Login;