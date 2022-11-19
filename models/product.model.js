import mongoose from 'mongoose'

const productSchema = mongoose.Schema({
	name: {type: String, required: true},
    price: {type: Number, required: true},
    reviews: [{type: mongoose.Schema.ObjectId, ref: 'Review'}]
});

export default mongoose.model('Product', productSchema);