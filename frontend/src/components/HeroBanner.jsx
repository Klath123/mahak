import React from "react";
import { Box, Typography, Button, Container } from "@mui/material";
import { Link } from "react-router-dom";
import snowflake from "../assets/snowflake.png";
import Navbar from "./Navbar";

// Define animation keyframes
const keyframes = `
  @keyframes slideInFromLeft {
    0% {
      transform: translateX(-50px);
      opacity: 0;
    }
    100% {
      transform: translateX(0);
      opacity: 1;
    }
  }
  @keyframes slideInFromRight {
    0% {
      transform: translateX(50px);
      opacity: 0;
    }
    100% {
      transform: translateX(0);
      opacity: 1;
    }
  }
  @keyframes slideInFromBottom {
    0% {
      transform: translateY(50px);
      opacity: 0;
    }
    100% {
      transform: translateY(0);
      opacity: 1;
    }
  }
  @keyframes subtleFloat {
    0% {
      transform: translateY(0px);
    }
    50% {
      transform: translateY(-8px);
    }
    100% {
      transform: translateY(0px);
    }
  }
  @keyframes fadeIn {
    0% { opacity: 0; }
    100% { opacity: 1; }
  }
  @keyframes constantGlow {
    0%, 100% {
      box-shadow: 0 0 15px rgba(59, 130, 246, 0.3);
    }
  }
  @keyframes constantImageGlow {
    0%, 100% {
      filter: drop-shadow(0 0 15px rgba(59, 130, 246, 0.2));
    }
  }
  @keyframes constantSnowflakeGlow {
    0%, 100% {
      filter: drop-shadow(0 0 8px rgba(255, 255, 255, 0.2)) brightness(1);
    }
  }
  @keyframes constantGoldGlow {
    0%, 100% {
      filter: drop-shadow(0 0 12px rgba(255, 215, 0, 0.3)) brightness(1);
      border-color: rgba(255, 255, 255, 0.25);
    }
  }
  @keyframes buttonHoverGlow {
    0% {
      box-shadow: 0 0 15px rgba(59, 130, 246, 0.3);
    }
    100% {
      box-shadow: 0 0 25px rgba(59, 130, 246, 0.6), 0 0 35px rgba(37, 99, 235, 0.3);
    }
  }
  @keyframes bounceArrow {
    0%, 20%, 50%, 80%, 100% {
      transform: translateY(0);
    }
    40% {
      transform: translateY(-10px);
    }
    60% {
      transform: translateY(-5px);
    }
  }
`;

export default function HeroBanner() {
  return (
    <Box
      sx={{
        width: "100%",
        minHeight: "100vh",
        backgroundColor: "#0b1e2e",
        backgroundImage: `
          url("https://www.transparenttextures.com/patterns/clean-textile.png"),
          linear-gradient(45deg, #0b1e2e , #356175, #92c7d6)
        `,
        backgroundSize: "200px, auto",
        backgroundBlendMode: "overlay",
        color: "white",
        pt: 2,
        overflow: "hidden",
        position: "relative",
        display: "flex",
        flexDirection: "column",
      }}
    >
      {/* Inject keyframes into the page */}
      <style>{keyframes}</style>
      
      <Navbar />
      <Box
  sx={{
    width: "100%",
    height: "1px",
    mt: 0.5,
    backgroundColor: "rgba(255,255,255,0.4)",
  }}
/>

      <Container
        maxWidth="xl"
        sx={{
          flex: 1,
          display: "flex",
          flexDirection: { xs: "column", md: "row" },
          alignItems: "center",
          justifyContent: "space-between",
          textAlign: { md: "left" },
          position: "relative",
          zIndex: 2,
          pt: { xs: 10, md: 0 },
          pb: { xs: 10, md: 0 },
          gap: { xs: 8, md: 0 },
        }}
      >
        {/* LEFT TEXT */}
        <Box
          sx={{
            maxWidth: "520px",
            pl: { xs: 0, md: 8 },
            px: { xs: 2, md: 0 },
            animation: "slideInFromLeft 1s ease-out",
          }}
        >
          <Typography
            variant="h1"
            sx={{
              fontFamily: "'Playfair Display', serif",
              fontWeight: 700,
              lineHeight: 1.05,
              fontSize: { xs: "2.6rem", sm: "3.2rem", md: "4rem" },
              mb: 3,
              ml: 18,
              textShadow: "0 2px 10px rgba(0,0,0,0.3)",
            }}
          >
            Scents For
            <br />
            your{" "}
            <span
              style={{
                textDecoration: "underline",
                textUnderlineOffset: 8,
                textDecorationThickness: 2,
                background: "linear-gradient(45deg, #60a5fa, #93c5fd)",
                backgroundClip: "text",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
              }}
            >
              unique
            </span>
            <br />
            image
          </Typography>

          <Typography
            sx={{
              fontSize: "1.05rem",
              opacity: 0.82,
              mb: 4,
              ml: 18,
              lineHeight: 1.65,
              maxWidth: "390px",
              fontFamily: "Inter",
              textShadow: "0 1px 5px rgba(0,0,0,0.2)",
            }}
          >
            Discover the perfect fragrance that defines you. Explore our curated
            collection of premium perfumes crafted to elevate your style.
          </Typography>

          {/* CTA BUTTON WITH REDUCED GLOW */}
          <Button
            component={Link}
            to="/collections"
            variant="contained"
            sx={{
              background: "linear-gradient(135deg, #1e3a8a, #2563eb)",
              px: 5,
              py: 1.5,
              borderRadius: "30px",
              textTransform: "none",
              fontWeight: 600,
              ml: 18,
              fontSize: "1rem",
              position: "relative",
              overflow: "hidden",
              animation: "constantGlow 1s ease-out", 
              transition: "all 0.3s ease",
              "&::before": {
                content: '""',
                position: "absolute",
                top: 0,
                left: "-100%",
                width: "100%",
                height: "100%",
                background: "linear-gradient(90deg, transparent, rgba(255,255,255,0.2), transparent)",
                transition: "left 0.5s ease",
              },
              "&:hover": {
                background: "linear-gradient(135deg, #1e40af, #3b82f6)",
                transform: "translateY(-2px)",
                animation: "buttonHoverGlow 0.3s ease-out forwards", 
                "&::before": {
                  left: "100%",
                },
              },
              "&:active": {
                transform: "translateY(0px)",
              },
            }}
          >
            Shop Now
          </Button>
        </Box>

        {/* MAIN PERFUME IMAGE WITH CONSTANT GLOW */}
        <Box
          sx={{
            flex: 1,
            display: "flex",
            ml: 10,
            alignItems: "center",
            mt: { xs: -4, sm: -8, md: -10 },
            animation: "slideInFromRight 1s ease-out",
          }}
        >
          <Box
            sx={{
              width: { xs: 300, sm: 400, md: 500 },
              height: { xs: 300, sm: 400, md: 500 },
              borderRadius: { xs: "150px 150px 0 0", md: "250px 250px 0 0" },
              overflow: "hidden",
                filter: "drop-shadow(0 0 8px rgba(59, 130, 246, 0.7))", 
              boxShadow: "0 0 25px rgba(0,0,0,0.35)",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              position: "relative",
              animation: "constantImageGlow 1s ease-out", 
              transition: "all 0.3s ease",
              cursor: "pointer",
              "&::after": {
                content: '""',
                position: "absolute",
                top: 0,
                left: 0,
                right: 0,
                bottom: 0,
                background: "linear-gradient(45deg, rgba(59, 130, 246, 0.08), rgba(37, 99, 235, 0.04))",
                opacity: 0,
                transition: "opacity 0.3s ease",
                borderRadius: "inherit",
              },
              "&:hover": {
                transform: "translateY(-5px)", 
                filter: "drop-shadow(0 0 10px rgba(59, 130, 246, 1.04))", 
                boxShadow: "0 10px 30px rgba(0,0,0,0.5)",
                "&::after": {
                  opacity: 1,
                },
                "& img": {
                  transform: "scale(1.03)", 
                },
              },
            }}
          >
            <img
              src="https://images.unsplash.com/photo-1615160460524-432433ba1b8f?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fHBlcmZ1bWUlMjBib3R0bGV8ZW58MHx8MHx8fDA%3D"
              alt="Versace Eros"
              style={{
                width: "100%",
                height: "100%",
                objectFit: "cover",
                transition: "transform 0.4s ease",
              }}
            />
          </Box>
        </Box>
      </Container>

      {/* SNOWFLAKE WITH CONSTANT GLOW */}
      <Box
        sx={{
          position: "absolute",
          top: { xs: "auto", md: "25%" },
          bottom: { xs: "20%", md: "auto" },
          right: { xs: "4%", md: "10%" },
          zIndex: 1,
          opacity: 0.28,
          animation: "fadeIn 1.5s ease-out, subtleFloat 6s ease-in-out infinite 1s, constantSnowflakeGlow 1s ease-out",
          transition: "all 0.3s ease",
          cursor: "pointer",
          "&:hover": {
            opacity: 0.4,
            filter: "drop-shadow(0 0 15px rgba(255, 255, 255, 0.4)) brightness(1.1)", 
            transform: "scale(1.1) rotate(90deg)",
          },
        }}
      >
        <img
          src={snowflake}
          alt="Snowflake Icon"
          style={{ 
            width: 130, 
            opacity: 0.7,
            transition: "all 0.3s ease",
          }}
        />
      </Box>

      {/* GOLD PERFUME IMAGE WITH CONSTANT GLOW */}
      <Box
        sx={{
          position: "absolute",
          bottom: { xs: -45, md: -80 },
          right: { xs: -60, md: -90 },
          width: { xs: 200, md: 300 },
          height: { xs: 200, md: 300 },
          borderRadius: "45%",
           filter: "drop-shadow(0 0 8px rgba(255, 215, 0, 0.5)) brightness(1)", 
          overflow: "hidden",
          border: "2px solid rgba(255,255,255,0.25)",
          zIndex: 5,
          animation: "slideInFromBottom 1s ease-out 0.3s, constantGoldGlow 1s ease-out",
          transition: "all 0.4s ease",
          cursor: "pointer",
          "&:hover": {
            transform: "translateY(-8px) rotate(3deg) scale(1.05)", 
            filter: "drop-shadow(0 0 10px rgba(255, 215, 0, 0.5)) brightness(1.05)", 
            boxShadow: "0 15px 35px rgba(255, 215, 0, 0.2)",
            border: "2px solid rgba(255, 215, 0, 0.6)",
            "& img": {
              transform: "scale(1.08)", 
            },
          },
        }}
      >
        <img
          src="https://images.unsplash.com/photo-1705936119413-bdd48ac9699c?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NjZ8fHBlcmZ1bWUlMjBib3R0bGV8ZW58MHx8MHx8fDA%3D"
          alt="Gold Perfume"
          style={{
            width: "100%",
            height: "100%",
            objectFit: "cover",
            transition: "transform 0.4s ease",
          }}
        />
      </Box>

      {/* DOWNWARD ARROW WITH ANIMATION */}
      <Box
        sx={{
          position: "absolute",
          bottom: "30px",
          left: "50%",
          transform: "translateX(-50%)",
          zIndex: 10,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: 1,
          animation: "fadeIn 2s ease-out 1s both",
        }}
      >
     <Box
  sx={{
    width: "18px",
    height: "18px",
    borderLeft: "2px solid rgba(255,255,255,0.8)",
    borderBottom: "2px solid rgba(255,255,255,0.8)",
    transform: "rotate(-15eg)", 
    animation: "bounceArrow 2s infinite",
    cursor: "pointer",
    transition: "0.3s ease",
    "&:hover": {
      borderColor: "white",
    },
  }}
/>
      </Box>

      {/* ADDITIONAL BACKGROUND GLOW ELEMENTS */}
      <Box
        sx={{
          position: "absolute",
          top: "20%",
          left: "5%",
          width: "400px",
          height: "400px",
          background: "radial-gradient(circle, rgba(59, 130, 246, 0.1) 0%, transparent 70%)",
          borderRadius: "50%",
          filter: "blur(40px)",
          zIndex: 1,
        }}
      />
      
      <Box
        sx={{
          position: "absolute",
          bottom: "10%",
          right: "15%",
          width: "300px",
          height: "300px",
          background: "radial-gradient(circle, rgba(255, 215, 0, 0.08) 0%, transparent 70%)",
          borderRadius: "50%",
          filter: "blur(30px)",
          zIndex: 1,
        }}
      />
    </Box>
  );
}