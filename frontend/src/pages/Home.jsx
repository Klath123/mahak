import React, { useEffect, useState } from 'react';
import { Container, Typography, CircularProgress, Box } from '@mui/material';

import ProductCard from '../components/ProductCard';
import FeaturedProducts from "../components/FeaturedProducts";  // NEW COMPONENT
import HeroBanner from '../components/HeroBanner';
import WhyChooseUs from '../components/WhyChooseUs'; 
import AboutBanner from "../components/AboutBanner";
import TestimonialSection from '../components/TestimonialSection'; 
import Footer from "../components/Footer";
import API from '../api';

export default function Home() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    setLoading(true);
    API.get('/products')
      .then(r => {
        setProducts(r.data);
        setError(null);
      })
      .catch(err => {
        console.error("Error fetching products:", err);
        setError("Failed to load products. Please try again later.");
      })
      .finally(() => {
        setLoading(false);
      });
  }, []);

  if (loading) {
    return (
      <Container sx={{ mt: 10, display: 'flex', justifyContent: 'center' }}>
        <CircularProgress />
        <Typography variant="h6" sx={{ ml: 2 }}>Loading perfumes...</Typography>
      </Container>
    );
  }

  if (error) {
    return (
      <Container sx={{ mt: 10 }}>
        <Typography color="error" variant="h5" align="center">{error}</Typography>
      </Container>
    );
  }

  return (
    <>
      <HeroBanner />
      <WhyChooseUs />
       <AboutBanner />
         <FeaturedProducts products={products} />
        <TestimonialSection />
    
        {/* Footer */}
        <Footer />

    </>
  );
}
