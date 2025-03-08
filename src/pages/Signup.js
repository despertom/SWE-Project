import logo from '../logo.svg';
import { useState } from 'react';
import '../App.css';

function Signup() {
	const [username, setUsername] = useState('');
	const [password, setPassword] = useState('');

	async function signUp() {
			try {
				const response = await fetch('/user/signup', { // Assuming your backend runs on the same host:port for development, otherwise specify the full URL (e.g., http://localhost:5000/user/signup)
					method: 'POST',
					headers: {
						'Content-Type': 'application/json',
					},
					body: JSON.stringify({
						username: username,
						password: password,
					}),
				});

				if (response.ok) {
					const data = await response.json();
					console.log('Signup successful:', data);
					// Handle successful signup (e.g., redirect to login page, show success message)
					// Reset fields
					setUsername('')
					setPassword('')
				} else {
					const errorData = await response.json();
					console.error('Signup failed:', errorData);
					// Handle signup failure (e.g., show error message)
				}
			} catch (error) {
				console.error('Error during signup:', error);
				// Handle network or other errors
			}
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
				<input type="password" value={password} onChange={e => setPassword(e.target.value)} />
			</label>
			<br />
			<button onClick={signUp}>Sign Up</button>
		</div>
	);
}

export default Signup;