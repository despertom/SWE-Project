import logo from '../logo.svg';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../App.css';

function Login() {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();

    async function checkLogin() {
        try {
            const response = await fetch('http://localhost:5000/user/login', {
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
                console.log('Login successful:', data);
                // Store the username in local storage
                localStorage.setItem('username', data.username);
                // Redirect to the calculator page
                navigate('/calculator');
            } else {
                const errorData = await response.json();
                console.error('Login failed:', errorData);
                // Handle login failure (e.g., show error message)
                alert(errorData.message)
            }
        } catch (error) {
            console.error('Error during login:', error);
            // Handle network or other errors
        }
    }

    return (
        <div className="login">
            <h1>Login</h1>
            <div className="field">
                <label>Username:</label>
                <input className="inputbox" value={username} onChange={e => setUsername(e.target.value)} />
            </div>
            <div className="field">
                <label>Password:</label>
                <input className="inputbox" value={password} type="password" onChange={e => setPassword(e.target.value)} />
            </div>
            <button onClick={checkLogin}>Log In</button>
        </div>
    );
}

export default Login;
