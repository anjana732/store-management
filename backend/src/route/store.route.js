// src/routes/store.routes.js
const express = require('express');
const { createStore, getStores, getStoreRatings } = require('../controller/store.controller.js');
const { authenticate } = require('../middleware/auth.middleware.js');
const router = express.Router();

router.post('/', authenticate(['admin']), createStore);
router.get('/', authenticate(['admin', 'user', 'store_owner']), getStores);
router.get('/:storeId/ratings', authenticate(['admin', 'user', 'store_owner']), getStoreRatings);

module.exports = router;
