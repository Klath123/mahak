import mongoose from 'mongoose';

const ReviewSchema = new mongoose.Schema({
  product: { 
    type: mongoose.Schema.Types.ObjectId, 
    ref: 'Product',
    required: true 
  },
  user: {
    type: String,
    required: true,
    trim: true,
    minlength: 1 
  },
  rating: { 
    type: Number, 
    required: true,
    min: 1, // Minimum rating of 1 star
    max: 5  // Maximum rating of 5 stars
  },

  comment: {
    type: String,
    required: true,
    trim: true
  },
}, { 
  timestamps: true // Automatically adds createdAt and updatedAt fields
});

const Review = mongoose.model('Review', ReviewSchema);
export default Review;