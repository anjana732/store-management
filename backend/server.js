// server.js
require('dotenv').config();
const express = require('express');
const { sequelize } = require('./src/model');
const authRoutes = require('./src/route/auth.route.js');
const storeRoutes = require('./src/route/store.route.js');
const ratingRoutes = require('./src/route/rating.route.js');

const app = express();
app.use(express.json());

app.use('/api/auth', authRoutes);
app.use('/api/stores', storeRoutes);
app.use('/api/ratings', ratingRoutes);

app.listen(process.env.PORT, async () => {
    await sequelize.sync();
    console.log(`Server running on port ${process.env.PORT}`);
});
