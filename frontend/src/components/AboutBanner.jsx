import React from "react";
import { Box, Typography, Container } from "@mui/material";

const keyframes = `
  @keyframes fadeUp {
    0% { opacity: 0; transform: translateY(20px); }
    100% { opacity: 1; transform: translateY(0); }
  }
  @keyframes floatSoft {
    0%,100% { transform: translateY(0); }
    50% { transform: translateY(-8px); }
  }
`;

export default function AboutBanner() {
  return (
    <Box
      sx={{
        width: "100%",
        minHeight: "45vh",
        backgroundImage: `
          url("https://www.transparenttextures.com/patterns/clean-textile.png"),
          linear-gradient(135deg, #0b1e2e, #15354c, #0b1e2e)
        `,
        backgroundSize: "100px, cover",
        backgroundBlendMode: "overlay",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        py: { xs: 6, md: 10 },
        position: "relative",
        color: "white",
      }}
    >
      {/* Inject keyframes */}
      <style>{keyframes}</style>

      <Container
        maxWidth="xl"
        sx={{
          display: "flex",
          flexDirection: { xs: "column", md: "row" },
          alignItems: "center",
          justifyContent: "center",
          gap: { xs: 6, md: 8 },       
        }}
      >
        {/* LEFT TEXT SECTION */}
        <Box
          sx={{
            maxWidth: "550px",
            animation: "fadeUp 0.8s ease-out",
            textAlign: { xs: "center", md: "left" },
            ml: { xs: 0, md: 5 },        
          }}
        >
          <Typography
            variant="h2"                
            sx={{
              fontFamily: "'Playfair Display', serif",
              fontWeight: 900,
              mb: 2,
            }}
          >
            About mahak
          </Typography>

          <Typography
            sx={{
              mt: 1,
              opacity: 0.9,
              lineHeight: 1.65,
              fontSize: "1.2rem",
              maxWidth: "480px",
              mx: { xs: "auto", md: "0" },
            }}
          >
            At mahak, we believe that a fragrance is more than a scent — it is an
            extension of your identity. Our mission is to craft luxurious,
            long-lasting perfumes that blend artistry, science, and emotion.
          </Typography>

          <Typography
            sx={{
              mt: 1.5,
              opacity: 0.9,
              lineHeight: 1.6,
              fontSize: "1.2rem",
              maxWidth: "480px",
              mx: { xs: "auto", md: "0" },
            }}
          >
            Each perfume is created using globally sourced ingredients, refined
            by master perfumers, and designed to leave an unforgettable
            impression. Whether bold, elegant, subtle, or sensual — we create
            fragrances that celebrate your individuality.
          </Typography>
        </Box>

        {/* RIGHT IMAGE — Adjusted size for balance */}
        <Box
          sx={{
            width: { xs: "92%", sm: "75%", md: "530px" },   
            height: { xs: "250px", md: "390px" },           
            borderRadius: "20px",
            overflow: "hidden",
            position: "relative",
            animation: "floatSoft 6s ease-in-out infinite",
            boxShadow: "0 25px 55px rgba(0,0,0,0.35)",
            border: "1px solid rgba(255,255,255,0.25)",
            transition: "0.4s ease",
            "&:hover img": {
              transform: "scale(1.05)",
            },
          }}
        >
          <img
            src="https://plus.unsplash.com/premium_photo-1670574873484-bf0923c33a24?w=1000&q=80"
            alt="About Us"
            style={{
              width: "100%",
              height: "100%",
              objectFit: "cover",
              transition: "0.4s ease",
            }}
          />
        </Box>
      </Container>
    </Box>
  );
}
