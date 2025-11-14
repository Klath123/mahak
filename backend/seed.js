import 'dotenv/config';
import { v2 as cloudinary } from 'cloudinary';
import fs from 'fs';
import path from 'path';
import connectDB from './config/db.js';
import Product from './models/Product.js';
import Review from './models/Review.js';
// ⭐ NEW IMPORT
import Testimonial from './models/Testimonial.js'; 


// ------------------ CLOUDINARY CONFIG ------------------
cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
});

const uploadImage = async (localPath) => {
  try {
    const res = await cloudinary.uploader.upload(localPath, {
      folder: 'perfume-shop/products',
    });
    return res.secure_url;
  } catch (err) {
    console.error('Cloudinary upload failed:', err.message);
    throw err;
  }
};


const sampleProducts = [
  {
    name: "Aurora Velvet",
    slug: "aurora-velvet",
    description: "A soft, warm scent with notes of vanilla, amber and wild rose.",
    price: 59.99,
    sizes: ["30ml", "50ml", "100ml"],
    images: ["aurora-1.webp", "aurora-2.webp"],
    ingredients: [
      "Madagascar Vanilla",
      "Golden Amber",
      "Wild Rose Petals",
      "Creamy Musk",
      "White Sandalwood"
    ]
  },
  {
    name: "Midnight Oud",
    slug: "midnight-oud",
    description: "An intense oud-forward composition with leather and spice.",
    price: 89.99,
    sizes: ["50ml", "100ml"],
    images: ["oud-1.webp", "oud-2.webp"],
    ingredients: [
      "Oud Resin",
      "Black Pepper",
      "Burnt Leather",
      "Smoked Patchouli",
      "Dark Cedarwood"
    ]
  },
  {
    name: "Citrus Bloom",
    slug: "citrus-bloom",
    description: "A fresh, zesty fragrance — grapefruit, bergamot and jasmine.",
    price: 49.99,
    sizes: ["30ml", "50ml"],
    images: ["citrus-1.webp", "citrus-2.webp"],
    ingredients: [
      "Italian Bergamot",
      "Pink Grapefruit",
      "Green Mandarin",
      "Jasmine Blossom",
      "White Musk"
    ]
  },
  {
    name: "Noir Leather",
    slug: "noir-leather",
    description: "Smoky leather and deep vetiver for evening wear.",
    price: 75.0,
    sizes: ["50ml", "100ml"],
    images: ["noir-1.webp"],
    ingredients: [
      "Black Leather Accord",
      "Smoky Vetiver",
      "Incense Resin",
      "Guaiac Wood",
      "Tonka Bean"
    ]
  },
  {
    name: "Royal Saffron",
    slug: "royal-saffron",
    description: "A luxurious saffron fragrance blended with warm woods and subtle sweetness.",
    price: 110.00,
    sizes: ["50ml", "100ml"],
    images: ["saffron-1.webp", "saffron-2.webp"],
    ingredients: [
      "Iranian Saffron",
      "Amberwood",
      "Sweet Resin",
      "Warm Cedar",
      "Dry Musk"
    ]
  },
  {
    name: "Ocean Mist",
    slug: "ocean-mist",
    description: "A refreshing aquatic scent inspired by ocean breeze and driftwood.",
    price: 54.99,
    sizes: ["30ml", "50ml", "100ml"],
    images: ["ocean-1.webp", "ocean-2.webp"],
    ingredients: [
      "Sea Salt Accord",
      "Marine Mist",
      "Blue Lotus",
      "Driftwood",
      "White Amber"
    ]
  },
  {
    name: "Golden Oud Rose",
    slug: "golden-oud-rose",
    description: "A luxurious blend of rose and oud for a royal and mesmerizing aroma.",
    price: 129.99,
    sizes: ["50ml", "100ml"],
    images: ["oudrose-1.webp", "oudrose-2.webp"],
    ingredients: [
      "Turkish Rose",
      "Cambodian Oud",
      "Labdanum",
      "Honey Resin",
      "Soft Musk"
    ]
  },
  {
    name: "Lavender Sky",
    slug: "lavender-sky",
    description: "A calming aromatic scent with lavender, citrus, and fresh herbs.",
    price: 44.99,
    sizes: ["30ml", "50ml"],
    images: ["lavender-1.webp", "lavender-2.webp"],
    ingredients: [
      "French Lavender",
      "Fresh Lemon Peel",
      "Clary Sage",
      "Blue Eucalyptus",
      "Soft Musk"
    ]
  }
];

const sampleTestimonials = [
  {
    quote: "I finally found my signature scent! Aurora Velvet is soft, luxurious, and lasts all day without being overpowering. Highly recommend for everyday wear.",
    name: "Sarah J.",
    location: "Los Angeles, CA",
  },
  {
    quote: "Midnight Oud is an absolute masterpiece. It's rich, deep, and perfect for special occasions. It draws compliments every single time I wear it.",
    name: "Omar K.",
    location: "Dubai, UAE",
  },
  {
    quote: "The Citrus Bloom is a burst of sunshine! It's so refreshing and vibrant—the perfect pick-me-up. I love the clean, natural quality of the scent.",
    name: "Emily R.",
    location: "New York, NY",
  },
  {
    quote: "I was looking for a high-quality leather scent and Noir Leather exceeded expectations. It's sophisticated, smoky, and definitely worth the price.",
    name: "David L.",
    location: "London, UK",
  },
  {
    quote: "Impressed with the fast shipping and the beautiful packaging. The perfumes are authentic and the quality is outstanding. A reliable luxury shop.",
    name: "Jessica P.",
    location: "Miami, FL",
  },
  {
    quote: "This shop has the most unique collection. The descriptions are accurate, and the scents are long-lasting. This is my new go-to for all my fragrance needs.",
    name: "Michael B.",
    location: "Toronto, ON",
  },
];

const run = async () => {
  const uri = process.env.MONGO_URI;

  console.log('Connecting to MongoDB...');
  await connectDB(uri);

  console.log('Cleaning database...');
  await Review.deleteMany({});
  await Product.deleteMany({});
  await Testimonial.deleteMany({}); 

  console.log('Uploading images & inserting products...');

  const finalProducts = [];

  for (const product of sampleProducts) {
    const uploadedImages = [];

    for (const img of product.images) {
      const localPath = path.join('images', img);

      if (!fs.existsSync(localPath)) {
        console.error(`Image not found: ${localPath}`);
        continue;
      }

      const url = await uploadImage(localPath);
      uploadedImages.push({ url }); 
    }

    finalProducts.push({
      ...product,
      images: uploadedImages,
    });
  }

  const createdProducts = await Product.insertMany(finalProducts);
  const createdTestimonials = await Testimonial.insertMany(sampleTestimonials);


  console.log('--- SEEDING COMPLETE ---');
  console.log(`Seeded products: ${createdProducts.length}`);
  console.log(`Seeded testimonials: ${createdTestimonials.length}`);
  console.log('------------------------');
  
  process.exit(0);
};


// ------------------ RUN SCRIPT ------------------
run().catch((err) => {
  console.error('SEEDING FAILED:', err);
  process.exit(1);
});