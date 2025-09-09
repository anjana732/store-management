// src/services/api.js
import axios from 'axios';

// Configure base API instance
const api = axios.create({
    baseURL: 'http://localhost:5000/api',  // Backend API base URL
    headers: {
        'Content-Type': 'application/json',
    },
});

// Add auth token interceptor
api.interceptors.request.use((config) => {
    const token = localStorage.getItem('token');
    if (token) {
        config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
}, (error) => Promise.reject(error));

export default api;
