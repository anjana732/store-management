// src/pages/Signup.jsx
import React, { useState } from 'react';
import api from '../services/api';

export default function Signup({ setToken }) {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [address, setAddress] = useState('');
    const [password, setPassword] = useState('');
    const [role, setRole] = useState('user');  // Default role: Normal User

    const handleSignup = async (e) => {
        e.preventDefault();
        try {
            await api.post('/auth/signup', { name, email, address, password, role });
            const res = await api.post('/auth/login', { email, password });
            localStorage.setItem('token', res.data.token);
            setToken(res.data.token);
        } catch (err) {
            alert('Signup failed: ' + err.response?.data?.error);
        }
    };

    return (
        <form onSubmit={handleSignup} className="p-4 max-w-md mx-auto">
            <h2 className="text-xl font-bold mb-4">Signup</h2>
            <input type="text" placeholder="Name" value={name}
                   onChange={e => setName(e.target.value)}
                   className="border p-2 w-full mb-4" required />
            <input type="email" placeholder="Email" value={email}
                   onChange={e => setEmail(e.target.value)}
                   className="border p-2 w-full mb-4" required />
            <input type="text" placeholder="Address" value={address}
                   onChange={e => setAddress(e.target.value)}
                   className="border p-2 w-full mb-4" required />
            <input type="password" placeholder="Password" value={password}
                   onChange={e => setPassword(e.target.value)}
                   className="border p-2 w-full mb-4" required />
            <select value={role} onChange={e => setRole(e.target.value)}
                    className="border p-2 w-full mb-4">
                <option value="user">Normal User</option>
                <option value="store_owner">Store Owner</option>
                <option value="admin">Admin</option>
            </select>
            <button type="submit" className="bg-green-500 text-white px-4 py-2">Signup</button>
        </form>
    );
}
