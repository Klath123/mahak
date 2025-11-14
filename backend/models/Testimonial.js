// models/Testimonial.js

import mongoose from 'mongoose';

const testimonialSchema = new mongoose.Schema(
  {
    quote: {
      type: String,
      required: true,
    },
    name: {
      type: String,
      required: true,
    },
    location: {
      type: String,
      required: false, // Location is optional, though provided in the seed data
    },
  },
  {
    timestamps: true, // Automatically adds createdAt and updatedAt fields
  }
);

const Testimonial = mongoose.model('Testimonial', testimonialSchema);

export default Testimonial;