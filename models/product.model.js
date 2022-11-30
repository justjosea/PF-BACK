const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
	name: {type: String, required: true},
    price: {type: Number, required: true},
    categories: [{type: mongoose.Schema.ObjectId, ref: 'Categorie', required: true}]
});

module.exports = mongoose.model('Product', productSchema);