// src/components/FeaturedProducts.jsx
import React, { useEffect, useRef, useState } from "react";
import { Typography, Grid, Box, Button } from "@mui/material";
import ProductCard from "./ProductCard";
import { Link } from "react-router-dom";

export default function FeaturedProducts({ products }) {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      {
        threshold: 0.15,
        rootMargin: "0px 0px -50px 0px",
      }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  if (!products || products.length === 0) {
    return (
      <Typography variant="h6" align="center" sx={{ mt: 5 }}>
        No products available at the moment.
      </Typography>
    );
  }

  return (
    <Box
      ref={sectionRef}
      sx={{
        mt: 10,
        mb: 14,
        width: "100%",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        overflow: "hidden",
      }}
    >
      {/* Section Title with Animation */}
      <Typography
        variant="h4"
        component="h2"
        align="center"
        sx={{
          fontWeight: "800",
          mb: 7,
          fontSize: "2.2rem",
          fontFamily: "'Playfair Display', serif",
          color: "#0b1e2e",
          opacity: isVisible ? 1 : 0,
          transform: isVisible ? "translateY(0)" : "translateY(30px)",
          transition: "all 0.8s ease-out 0.2s",
        }}
      >
        Featured Perfumes
      </Typography>

      {/* Grid Container */}
      <Box
        sx={{
          width: "100%",
          maxWidth: "1300px",
          px: { xs: 2, md: 3 },
          mb: 6,
        }}
      >
        <Grid
          container
          spacing={4}
          justifyContent="center"
          alignItems="stretch"
        >
          {products.slice(0, 4).map((product, index) => (
            <Grid
              item
              key={product.slug}
              xs={12}
              sm={6}
              md={4}
              lg={3}
              sx={{
                display: "flex",
                justifyContent: "center",
                opacity: isVisible ? 1 : 0,
                transform: isVisible ? "translateY(0)" : "translateY(40px)",
                transition: `all 0.6s ease-out ${0.3 + index * 0.1}s`,
              }}
            >
              <ProductCard product={product} />
            </Grid>
          ))}
        </Grid>
      </Box>

      {/* Animated Button */}
      <Box
        sx={{
          opacity: isVisible ? 1 : 0,
          transform: isVisible ? "translateY(0)" : "translateY(20px)",
          transition: "all 0.6s ease-out 0.8s",
        }}
      >
        <style>
          {`
            @keyframes wave {
              0% { transform: translateY(0); }
              50% { transform: translateY(-4px); }
              100% { transform: translateY(0); }
            }
          `}
        </style>

        <Button
          component={Link}
          to="/collections"
          sx={{
            px: 5,
            py: 1.4,
            borderRadius: "30px",
            fontSize: "1rem",
            fontWeight: 600,
            textTransform: "none",
            background: "linear-gradient(135deg, #0b1e2e, #1e3a8a)",
            color: "white",
            boxShadow: "0 6px 15px rgba(0,0,0,0.15)",
            transition: "0.3s ease",
            "&:hover": {
              animation: "wave 0.9s ease-in-out infinite",
              background: "linear-gradient(135deg, #0a1a27, #1e40af)",
            },
          }}
        >
          View More
        </Button>
      </Box>
    </Box>
  );
}
