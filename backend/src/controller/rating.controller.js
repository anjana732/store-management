// src/controllers/rating.controller.js
const { Rating, Store } = require('../models');

exports.submitRating = async (req, res) => {
    const { store_id, rating } = req.body;
    const user_id = req.user.id;

    const existing = await Rating.findOne({ where: { store_id, user_id } });
    if (existing) {
        existing.rating = rating;
        await existing.save();
    } else {
        await Rating.create({ store_id, user_id, rating });
    }

    // Update avg_rating
    const ratings = await Rating.findAll({ where: { store_id } });
    const avg = ratings.reduce((sum, r) => sum + r.rating, 0) / ratings.length;
    const store = await Store.findByPk(store_id);
    store.avg_rating = avg;
    await store.save();

    res.json({ message: 'Rating saved' });
};
