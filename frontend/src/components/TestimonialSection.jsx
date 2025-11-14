import React, { useEffect, useState } from "react";
import {
  Typography,
  Box,
  IconButton,
  CircularProgress,
  Rating,
} from "@mui/material";

import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";

import API from "../api";

export default function TestimonialSection() {
  const [testimonials, setTestimonials] = useState([]);
  const [index, setIndex] = useState(0);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    API.get("/testimonials")
      .then((r) => setTestimonials(r.data || []))
      .finally(() => setLoading(false));
  }, []);

  if (loading)
    return (
      <Box sx={{ py: 6, textAlign: "center" }}>
        <CircularProgress sx={{ color: "white" }} />
      </Box>
    );

  if (!testimonials.length)
    return (
      <Typography sx={{ textAlign: "center", py: 6, color: "white" }}>
        No testimonials available yet.
      </Typography>
    );

  const active = testimonials[index];

  const next = () => setIndex((prev) => (prev + 1) % testimonials.length);
  const prev = () =>
    setIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);

  return (
    <Box
      sx={{
        py: 6,
        px: 2,
        textAlign: "center",
        width: "100%",
        backgroundImage: `
          url("https://www.transparenttextures.com/patterns/clean-textile.png"),
          linear-gradient(180deg, #0b1e2e, #0a1a27)
        `,
        backgroundSize: "200px, cover",
        backgroundBlendMode: "overlay",

        display: "flex",
        flexDirection: "column",
        alignItems: "center",
      }}
    >
      {/* HEADING */}
      <Typography
        variant="h5"
        sx={{
          fontWeight: 800,
          mb: 4,
          color: "white",
          fontFamily: "'Playfair Display', serif",
        }}
      >
        What Our Customers Say
      </Typography>

      {/* MAIN CARD */}
      <Box
        sx={{
          position: "relative",
          width: "100%",
          maxWidth: "550px",
          p: { xs: 2.5, md: 4 },
          borderRadius: "18px",
          background: "rgba(255, 255, 255, 0.08)",
          backdropFilter: "blur(14px)",
          border: "1px solid rgba(255,255,255,0.12)",
          boxShadow: "0 14px 35px rgba(0,0,0,0.28)",
        }}
      >
        {/* QUOTE TEXT */}
        <Typography
          key={index}
          sx={{
            fontSize: "1.1rem",
            lineHeight: 1.6,
            color: "white",
            mb: 2,
            minHeight: "85px",
            animation: "fade 0.35s ease",
            fontStyle: "italic",
          }}
        >
          "{active.quote}"
        </Typography>

        {/* RATING */}
        {active.rating && (
          <Rating
            value={active.rating}
            readOnly
            sx={{
              mb: 2,
              "& .MuiRating-icon": { color: "#facc15", fontSize: "1.6rem" },
            }}
          />
        )}

        {/* NAME + LOCATION */}
        <Box sx={{ mt: 1 }}>
          <Typography
            sx={{ color: "white", fontWeight: 700, fontSize: "1.05rem" }}
          >
            {active.name}
          </Typography>

          {active.location && (
            <Typography sx={{ color: "rgba(255,255,255,0.65)", fontSize: ".9rem" }}>
              {active.location}
            </Typography>
          )}
        </Box>

        {/* NAV ARROWS */}
        <IconButton
          onClick={prev}
          sx={{
            position: "absolute",
            top: "50%",
            left: "-55px",
            transform: "translateY(-50%)",
            background: "rgba(255,255,255,0.15)",
            backdropFilter: "blur(6px)",
            width: 44,
            height: 44,
            "&:hover": { background: "rgba(255,255,255,0.25)" },
          }}
        >
          <ArrowBackIosNewIcon sx={{ color: "white", fontSize: "1rem" }} />
        </IconButton>

        <IconButton
          onClick={next}
          sx={{
            position: "absolute",
            top: "50%",
            right: "-55px",
            transform: "translateY(-50%)",
            background: "rgba(255,255,255,0.15)",
            backdropFilter: "blur(6px)",
            width: 44,
            height: 44,
            "&:hover": { background: "rgba(255,255,255,0.25)" },
          }}
        >
          <ArrowForwardIosIcon sx={{ color: "white", fontSize: "1rem" }} />
        </IconButton>
      </Box>

      <style>
        {`
          @keyframes fade {
            from { opacity: 0; transform: translateY(6px); }
            to { opacity: 1; transform: translateY(0); }
          }
        `}
      </style>
    </Box>
  );
}
