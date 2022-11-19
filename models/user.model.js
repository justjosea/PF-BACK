const mongoose = require('mongoose');

const userSchema = mongoose.Schema({
	name: {type: String, required: true},
    email: {type: String, required: true},
    password: {type: String, required: true},
    reviews: [{type: mongoose.Schema.ObjectId, ref: 'Review' }],
    purchases: [{type: mongoose.Schema.ObjectId, ref: 'Purchase' }],
});

export default mongoose.model('User', userSchema);
