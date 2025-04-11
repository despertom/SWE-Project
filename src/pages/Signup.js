import logo from '../logo.svg';
import { useState } from 'react';
import '../App.css';
import { useNavigate } from 'react-router-dom';

function Signup() {
	const [username, setUsername] = useState('');
	const [password, setPassword] = useState('');
	const navigate = useNavigate();

	async function signUp() {
			try {
				const response = await fetch('http://localhost:5000/user/signup', { // Assuming your backend runs on the same host:port for development, otherwise specify the full URL (e.g., http://localhost:5000/user/signup)
					method: 'POST',
					headers: {
						'Content-Type': 'application/json',
					},
					body: JSON.stringify({
						username: username,
						password: password,
					}),
				});

				console.log(response)
				if (response.ok) {
					const data = await response.json();
					console.log('Signup successful:', data);
					// Handle successful signup (e.g., redirect to login page, show success message)
					// Reset fields
					setUsername('')
					setPassword('')
					navigate('/login');
				} else {
					const errorData = await response.json();
					console.error('Signup failed:', errorData);
					// Handle signup failure (e.g., show error message)
					alert(errorData.message)
				}
			} catch (error) {
				console.error('Error during signup:', error);
				// Handle network or other errors
			}
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
