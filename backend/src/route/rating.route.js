// src/routes/rating.routes.js
const express = require('express');
const { submitRating } = require('../controller/rating.controller.js');
const { authenticate } = require('../middleware/auth.middleware.js');
const router = express.Router();

router.post('/', authenticate(['user']), submitRating);

module.exports = router;
