// src/controllers/store.controller.js
const { Store, Rating } = require('../models');

exports.createStore = async (req, res) => {
    const { name, address, owner_id } = req.body;
    const store = await Store.create({ name, address, owner_id });
    res.json(store);
};

exports.getStores = async (req, res) => {
    const stores = await Store.findAll();
    res.json(stores);
};

exports.getStoreRatings = async (req, res) => {
    const storeId = req.params.storeId;
    const ratings = await Rating.findAll({ where: { store_id: storeId } });
    res.json(ratings);
};
