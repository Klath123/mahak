// src/components/WhyChooseUs.jsx
import React, { useEffect, useRef, useState } from "react";
import { Typography, Box, Paper, Grid } from "@mui/material";

import LocalShippingIcon from "@mui/icons-material/LocalShipping";
import WorkspacePremiumIcon from "@mui/icons-material/WorkspacePremium";
import SupportAgentIcon from "@mui/icons-material/SupportAgent";

const features = [
  {
    icon: LocalShippingIcon,
    title: "Fast & Free Delivery",
    description: "Quick & secure shipping at no extra cost.",
  },
  {
    icon: WorkspacePremiumIcon,
    title: "Premium Quality",
    description: "Long-lasting and refined fragrances.",
  },
  {
    icon: SupportAgentIcon,
    title: "24/7 Support",
    description: "Dedicated customer assistance anytime.",
  },
];

const FeatureItem = ({ icon: Icon, title, description, delay, isVisible }) => (
  <Paper
    elevation={0}
    sx={{
      p: 4,
      textAlign: "center",
      borderRadius: "16px",
      border: "1px solid rgba(0,0,0,0.08)",
      background: "rgba(255,255,255,0.9)",
      backdropFilter: "blur(6px)",
      cursor: "pointer",
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      minHeight: 170,

      // Animation
      opacity: isVisible ? 1 : 0,
      transform: isVisible ? "translateY(0)" : "translateY(30px)",
      transition: "all 0.6s ease-out",
      transitionDelay: isVisible ? `${delay * 0.15}s` : "0s",

      "&:hover": {
        transform: isVisible ? "translateY(-8px)" : "translateY(30px)",
        boxShadow: "0 12px 28px rgba(0,0,0,0.12)",
        borderColor: "rgba(30,58,138,0.25)",
        transition: "all 0.25s ease",
      },
    }}
  >
    <Box
      sx={{
        width: 60,
        height: 60,
        borderRadius: "50%",
        background: "linear-gradient(135deg,#0b1e2e,#1e3a8a)",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        mb: 2.5,
      }}
    >
      <Icon sx={{ fontSize: 28, color: "#fff" }} />
    </Box>

    <Typography
      variant="h6"
      sx={{
        fontWeight: 700,
        mb: 1.2,
        color: "#0b1e2e",
        fontFamily: "'Inter', sans-serif",
      }}
    >
      {title}
    </Typography>

    <Typography
      variant="body2"
      sx={{
        color: "rgba(0,0,0,0.65)",
        lineHeight: 1.65,
      }}
    >
      {description}
    </Typography>
  </Paper>
);

export default function WhyChooseUs() {
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
        threshold: 0.2,
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

  return (
    <Box
      ref={sectionRef}
      sx={{
        py: { xs: 6, md: 10 },
        background: "transparent",
        width: "100%",
        position: "relative",
        overflow: "hidden",
      }}
    >
      <Box
        sx={{
          width: "100%",
          maxWidth: "1400px",
          mx: "auto",
          px: { xs: 2, md: 4 },
        }}
      >
        <Typography
          variant="h4"
          align="center"
          sx={{
            fontWeight: 800,
            mb: 7,
            fontSize: "2.2rem",
            fontFamily: "'Playfair Display', serif",
            color: "#0b1e2e",
            opacity: isVisible ? 1 : 0,
            transform: isVisible ? "translateY(0)" : "translateY(20px)",
            transition: "all 0.6s ease-out 0.1s",
          }}
        >
          Why Choose Us?
        </Typography>

        <Grid container spacing={5} justifyContent="center" alignItems="stretch">
          {features.map((feature, index) => (
            <Grid item key={index} xs={12} sm={6} md={3}>
              <FeatureItem
                icon={feature.icon}
                title={feature.title}
                description={feature.description}
                delay={index}
                isVisible={isVisible}
              />
            </Grid>
          ))}
        </Grid>
      </Box>
    </Box>
  );
}
