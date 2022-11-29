const mongoose = require('mongoose');

const reviewSchema = new mongoose.Schema({
    user: {type: mongoose.Schema.ObjectId, ref: 'User', required: true},
    product: {type: mongoose.Schema.ObjectId, ref: 'Product', required: true},
	rating: {type: Number, required: true},
    description: String
});

module.exports = mongoose.model('Review', reviewSchema);