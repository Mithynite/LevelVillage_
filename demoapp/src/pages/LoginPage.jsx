import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import '../styles/login-page.css';


const LoginPage = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();

    const handleLogin = async (e) => {
        e.preventDefault();
        console.log('Form submitted with:', { username, password }); // Debugging line
        try {
            const response = await axios.post('http://localhost:8080/api/login', {
                username,
                password,
            });
            console.log('Response:', response); // Debugging line
            if (response.status === 200) {
                navigate('/dashboard');
            }
        } catch (error) {
            console.error('Login failed:', error);
            alert('Login failed: ' + error.message); // User feedback
        }
    };


    return (
        <div className="login-box">
            <p>Login</p>
            <form onSubmit={handleLogin}>
                <div className="user-box">
                    <input name="username" type="text" value={username} onChange={(e) => setUsername(e.target.value)} required/>
                    <label>Email</label>
                </div>
                <div className="user-box">
                    <input name="password" type="password" value={password} onChange={(e) => setPassword(e.target.value)} required/>
                    <label>Password</label>
                </div>
                <button type="submit" className="btn">
                Submit
                </button>
            </form>
            <p>Don't have an account? <a href="/signup" className="a2">Sign up!</a></p>
        </div>
);
};

export default LoginPage;
