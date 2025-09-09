// src/pages/Login.jsx
import React, { useState } from 'react';
import api from '../services/api';

export default function Login({ setToken }) {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleLogin = async (e) => {
        e.preventDefault();
        try {
            const res = await api.post('/auth/login', { email, password });
            localStorage.setItem('token', res.data.token);
            setToken(res.data.token);
        } catch (err) {
            alert('Login failed: Invalid credentials');
        }
    };

    return (
        <form onSubmit={handleLogin} className="p-4 max-w-md mx-auto">
            <h2 className="text-xl font-bold mb-4">Login</h2>
            <input type="email" placeholder="Email" value={email}
                   onChange={e => setEmail(e.target.value)}
                   className="border p-2 w-full mb-4" required />
            <input type="password" placeholder="Password" value={password}
                   onChange={e => setPassword(e.target.value)}
                   className="border p-2 w-full mb-4" required />
            <button type="submit" className="bg-blue-500 text-white px-4 py-2">Login</button>
        </form>
    );
}
