import 'dotenv/config'; 
import express from 'express';
import cors from 'cors';
import connectDB from './config/db.js'; 
import productRoutes from './routes/product.js'; 
import testimonialRoutes from './routes/testimonialRoutes.js';
import newsletterRoute from "./routes/newsletter.js";
import contactRoute from "./routes/contact.js";

const app = express();

app.use(cors()); 
app.use(express.json()); 

const uri = process.env.MONGO_URI;
connectDB(uri);

app.use('/api/products', productRoutes);
app.use('/api/testimonials', testimonialRoutes);
app.use("/api/newsletter", newsletterRoute);
app.use("/contact", contactRoute);

app.get('/', (req, res) => res.send('Perfume Shop API is running!'));

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));