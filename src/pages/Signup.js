import logo from '../logo.svg';
import { useState } from 'react';
import '../App.css';

function Signup() {
	const [username, setUsername] = useState('');
	const [password, setPassword] = useState('');

	function signUp() {

	}

	return (
		<div className="signup">
			<header className="signup-header">Sign up</header>
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
			<br />
			<label className="inputbox">
				Password:
				<input value={password} onChange={e => setPassword(e.target.value)} />
			</label>
			<br />
			<button onClick={signUp}>Sign Up</button>
		</div>
	);
}

export default Signup;