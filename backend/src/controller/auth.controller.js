// src/controllers/auth.controller.js
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const { User } = require('../models');

exports.signup = async (req, res) => {
    const { name, email, address, password, role } = req.body;
    const hashed = await bcrypt.hash(password, 10);
    try {
        const user = await User.create({ name, email, address, password: hashed, role });
        res.json({ message: 'User registered', userId: user.id });
    } catch (err) {
        res.status(400).json({ error: 'Email already exists' });
    }
};

exports.login = async (req, res) => {
    const { email, password } = req.body;
    const user = await User.findOne({ where: { email } });
    if (!user || !(await bcrypt.compare(password, user.password))) {
        return res.status(401).json({ error: 'Invalid credentials' });
    }
    const token = jwt.sign({ id: user.id, role: user.role }, process.env.JWT_SECRET);
    res.json({ token });
};
