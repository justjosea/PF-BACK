const mongoose = require('mongoose');

const kartSchema = new mongoose.Schema({
    user: {type: mongoose.Schema.ObjectId, ref: 'User', required: true },
    product: {type: mongoose.Schema.ObjectId, ref: 'Product', required: true},
    amount: {type: Number, required: true}
});

module.exports = mongoose.model('Kart', kartSchema);