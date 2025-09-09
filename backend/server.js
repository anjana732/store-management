// server.js
require('dotenv').config();
const express = require('express');
const { sequelize } = require('./src/models');
const authRoutes = require('./src/routes/auth.routes');
const storeRoutes = require('./src/routes/store.routes');
const ratingRoutes = require('./src/routes/rating.routes');

const app = express();
app.use(express.json());

app.use('/api/auth', authRoutes);
app.use('/api/stores', storeRoutes);
app.use('/api/ratings', ratingRoutes);

app.listen(5000, async () => {
    await sequelize.sync();
    console.log('Server running on port 5000');
});
