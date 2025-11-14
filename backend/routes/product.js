import express from 'express';
import Product from '../models/Product.js';
import Review from '../models/Review.js';

const router = express.Router();

router.get('/', async (req, res) => {
  try {
    // Fetches top 20 products, excluding the __v field
    const products = await Product.find()
      .limit(20)
      .select('-__v')
      .lean();
      
    return res.json(products);
  } catch (error) {
    console.error('Error fetching product list:', error.message);
    res.status(500).json({ message: 'Server error retrieving products.' });
  }
});

router.get('/:slug', async (req, res) => {
  try {
    const prod = await Product.findOne({ slug: req.params.slug })
      .populate('reviews')
      .lean();
      
    if (!prod) {
      return res.status(404).json({ message: 'Product not found' });
    }
    
    res.json(prod);
  } catch (error) {
    console.error(`Error fetching product ${req.params.slug}:`, error.message);
    res.status(500).json({ message: 'Server error retrieving product details.' });
  }
});

router.post('/:slug/reviews', async (req, res) => {
  try {
    const { user = 'Guest', rating, comment } = req.body;
    
    const product = await Product.findOne({ slug: req.params.slug });
    if (!product) {
      return res.status(404).json({ message: 'Product not found' });
    }

    const review = new Review({ 
      product: product._id, 
      user, 
      rating, 
      comment 
    });
    
    await review.validate(); 
    await review.save();
    
    product.reviews.push(review._id);
    
    const result = await Review.aggregate([
      { $match: { product: product._id } },
      { $group: { _id: '$product', averageRating: { $avg: '$rating' } } }
    ]);
    
    const avg = result.length > 0 ? result[0].averageRating : 0;
    
    product.rating = Math.round(avg * 10) / 10;
    
    await product.save();
    
    res.status(201).json(review);

  } catch (error) {
    console.error('Error adding review:', error);
    
    if (error.name === 'ValidationError') {
      const messages = Object.values(error.errors).map(val => val.message);
      return res.status(400).json({ 
        message: 'Validation failed. Please check rating and comment.', 
        errors: messages 
      });
    }

    res.status(500).json({ message: 'Server error while processing review.' });
  }
});

export default router;