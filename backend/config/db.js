import mongoose from 'mongoose';

const connectDB = async (uri) => {
  if (!uri) {
    console.error('Error: MongoDB URI is missing.');
    process.exit(1);
  }
  
  try {
    await mongoose.connect(uri); 
    console.log('MongoDB connection successful!');
  } catch (err) {
    console.error('MongoDB connection error:', err.message);
    process.exit(1); 
  }
};

export default connectDB;