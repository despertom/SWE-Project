import logo from '../logo.svg';
import { useState } from 'react';
import '../App.css';

function Signup() {
	const [username, setUsername] = useState('');
	const [password, setPassword] = useState('');

	function signUp() {
		// TODO send to server, if valid, proceed to login and say
	}

	return (
		<div class="signup">
			<h1>Sign up</h1>
			<div class="field">
				<label>Username:</label>
				<input class="inputbox" value={username} onChange={e => setUsername(e.target.value)} />
			</div>
			<div class="field">
				<label>Password:</label>
				<input class="inputbox" value={password} type="password" onChange={e => setPassword(e.target.value)} />
			</div>
			<button onClick={signUp}>Sign Up</button>
		</div>
	);
}

export default Signup;