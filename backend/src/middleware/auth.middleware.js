
// const jwt = require('jsonwebtoken');

// exports.authenticate = (roles = []) => (req, res, next) => {
//     const token = req.headers.authorization?.split(' ')[1];
//     if (!token) return res.status(401).json({ error: 'Token missing' });

//     jwt.verify(token, process.env.JWT_SECRET, (err, user) => {
//         if (err) return res.status(403).json({ error: 'Invalid token' });
//         if (roles.length && !roles.includes(user.role)) return res.status(403).json({ error: 'Forbidden' });
//         req.user = user;
//         next();
//     });
// };

// src/middlewares/auth.middleware.js
const jwt = require('jsonwebtoken');

exports.authenticate = (roles = []) => (req, res, next) => {
    const token = req.headers.authorization?.split(' ')[1];
    if (!token) return res.status(401).json({ error: 'Unauthorized' });

    jwt.verify(token, process.env.JWT_SECRET, (err, user) => {
        if (err) return res.status(403).json({ error: 'Forbidden' });
        if (roles.length && !roles.includes(user.role)) return res.status(403).json({ error: 'Forbidden' });
        req.user = user;
        next();
    });
};
