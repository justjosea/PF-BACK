const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
	name: {type: String, required: true},
    email: {type: String, required: true},
    password: {type: String, required: true},
    purchases: [{type: mongoose.Schema.ObjectId, ref: 'Purchase' }], // me imagino que va a ser el historial de compras
    
});

module.exports = mongoose.model('User', userSchema);
