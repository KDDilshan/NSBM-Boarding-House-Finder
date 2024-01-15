import mongoose from 'mongoose';

const productSchema = new mongoose.Schema({
  content: String,
});

const Product = mongoose.model('Product', productSchema);

export default Product