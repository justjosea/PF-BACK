import mongoose from 'mongoose'

const purchaseSchema = mongoose.Schema({
    user: {type: mongoose.Schema.ObjectId, ref: 'User', required: true },
    products: [{type: mongoose.Schema.ObjectId, ref: 'Product', required: true}],
});

export default mongoose.model('Purchase', purchaseSchema);