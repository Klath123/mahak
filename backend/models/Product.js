import mongoose from 'mongoose';

const ImageSchema = new mongoose.Schema({ 
  url: { 
    type: String, 
    required: true,
    trim: true,
    minlength: 5 
  }
});

const ProductSchema = new mongoose.Schema({
  name: { 
    type: String, 
    required: true,
    trim: true 
  },
  slug: { 
    type: String, 
    required: true, 
    unique: true,
    trim: true 
  },
  description: {
    type: String,
    trim: true 
  },
  price: { 
    type: Number, 
    required: true,
    min: 0
  },
  ingredients: {
  type: [String],
  default: []
  },
  sizes: [String], 
  images: [ImageSchema], // Array of nested image documents
  rating: { 
    type: Number, 
    default: 0,
    min: 0,
    max: 5
  },
  reviews: [{ 
    type: mongoose.Schema.Types.ObjectId, 
    ref: 'Review' 
  }]
}, { 
  timestamps: true 
});

const Product = mongoose.model('Product', ProductSchema);
export default Product;