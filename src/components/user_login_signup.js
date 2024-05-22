import React, { useState } from 'react';
import '../styles/user_login_signup.css'; 

const UserLoginSignup = () => {
    const [registerFormData, setRegisterFormData] = useState({
        username: '',
        email: '',
        phone: '',
        password: ''
    });

    const [loginFormData, setLoginFormData] = useState({
        email: '',
        password: ''
    });

    const handleRegisterChange = (e) => {
        const { name, value } = e.target;
        setRegisterFormData({ ...registerFormData, [name]: value });
    };

    const handleLoginChange = (e) => {
        const { name, value } = e.target;
        setLoginFormData({ ...loginFormData, [name]: value });
    };

    const handleRegisterSubmit = (e) => {
        e.preventDefault();
        // Send registration data to backend
        fetch('localhost:5000/register', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(registerFormData)
        })
        .then(response => response.json())
        .then(data => {
            console.log(data);
            // Handle success or error response from backend
        })
        .catch(error => console.error('Error:', error));
    };

    const handleLoginSubmit = (e) => {
        e.preventDefault();
        // Send login data to backend
        fetch('localhost:5000/login', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(loginFormData)
        })
        .then(response => response.json())
        .then(data => {
            console.log(data);
            // Handle success or error response from backend
        })
        .catch(error => console.error('Error:', error));
    };

    return (
        <div className="main">
            <input type="checkbox" id="chk" aria-hidden="true" />

            <div className="signup">
                <form onSubmit={handleRegisterSubmit}>
                    <label htmlFor="chk" aria-hidden="true">Sign up</label>
                    <input type="text" name="username" placeholder="User name" value={registerFormData.username} onChange={handleRegisterChange} required />
                    <input type="email" name="email" placeholder="Email" value={registerFormData.email} onChange={handleRegisterChange} required />
                    <input type="tel" name="phone" placeholder="Phone Number" value={registerFormData.phone} onChange={handleRegisterChange} required />
                    <input type="password" name="password" placeholder="Password" value={registerFormData.password} onChange={handleRegisterChange} required />
                    <button type="submit">Sign up</button>
                </form>
            </div>

            <div className="login">
                <form onSubmit={handleLoginSubmit}>
                    <label htmlFor="chk" aria-hidden="true">Login</label>
                    <input type="email" name="email" placeholder="Email" value={loginFormData.email} onChange={handleLoginChange} required />
                    <input type="password" name="password" placeholder="Password" value={loginFormData.password} onChange={handleLoginChange} required />
                    <button type="submit">Login</button>
                </form>
            </div>
        </div>
    );
}

export default UserLoginSignup;
