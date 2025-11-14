// routes/testimonialRoutes.js

import express from 'express';
import Testimonial from '../models/Testimonial.js';

const router = express.Router();

router.get('/', async (req, res) => {
  try {
    // Fetch all testimonials, sort by creation date (newest first)
    const testimonials = await Testimonial.find({}).sort({ createdAt: -1 }); 
    res.json(testimonials);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Server Error: Failed to fetch testimonials.' });
  }
});

export default router;