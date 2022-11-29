const mongoose = require('mongoose');

const purchaseSchema = new mongoose.Schema({
    user: {type: mongoose.Schema.ObjectId, ref: 'User', required: true },
    products: [{type: mongoose.Schema.ObjectId, ref: 'Product', required: true}],
});

module.exports = mongoose.model('Purchase', purchaseSchema);