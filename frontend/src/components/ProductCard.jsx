import React from "react";
import {
  Card,
  CardMedia,
  CardContent,
  Typography,
  CardActionArea,
  Box,
} from "@mui/material";
import NorthEastIcon from "@mui/icons-material/NorthEast"; // ⭐ NEW ICON
import { useNavigate } from "react-router-dom";

export default function ProductCard({ product }) {
  const navigate = useNavigate();
  const imageUrl = product?.images?.[0]?.url || "/images/placeholder.jpg";

  return (
    <Card
      onClick={() => navigate(`/product/${product?.slug}`)}
      sx={{
        cursor: "pointer",
        borderRadius: "18px",
        overflow: "hidden",
        width: "100%",
        maxWidth: 250,
        background: "rgba(255,255,255,0.85)",
        border: "1px solid rgba(11,30,46,0.15)",
        position: "relative", // ⭐ REQUIRED FOR ABSOLUTE ICON

        transition: "all 0.35s ease",
        boxShadow: "0 6px 16px rgba(0,0,0,0.08)",

        "&:hover": {
          transform: "translateY(-6px)",
          boxShadow: "0 14px 28px rgba(0,0,0,0.18)",
          borderColor: "rgba(30,58,138,0.4)",
        },
      }}
    >

      {/* ⭐ Northeast Arrow Icon */}
      <Box
        sx={{
          position: "absolute",
          top: 10,
          right: 10,
          background: "rgba(11,30,46,0.1)",
          backdropFilter: "blur(4px)",
          borderRadius: "50%",
          width: 34,
          height: 34,
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          opacity: 0,
          transition: "opacity 0.35s ease",
          pointerEvents: "none", // icon shouldn't block clicks

          ".MuiCard-root:hover &": {
            opacity: 1,
          },
        }}
      >
        <NorthEastIcon sx={{ fontSize: 18, color: "#0b1e2e" }} />
      </Box>

      <CardActionArea
        sx={{
          "&:hover img": {
            transform: "scale(1.03)",
          },
        }}
      >
        <CardMedia
          component="img"
          height="200"
          image={imageUrl}
          alt={product?.name}
          sx={{
            objectFit: "cover",
            transition: "transform 0.4s ease",
          }}
        />

        <CardContent sx={{ px: 2, py: 2 }}>
          {/* Product Name */}
          <Typography
            variant="h6"
            sx={{
              fontWeight: 700,
              fontFamily: "'Inter', sans-serif",
              fontSize: "1rem",
              mb: 0.8,
              color: "#0b1e2e",
              textAlign: "center",
            }}
          >
            {product?.name}
          </Typography>

          {/* Short Description */}
          <Box sx={{ height: 40, overflow: "hidden", textAlign: "center" }}>
            <Typography
              variant="body2"
              sx={{
                color: "rgba(0,0,0,0.65)",
                lineHeight: 1.4,
                fontSize: "0.85rem",
              }}
            >
              {product?.description}
            </Typography>
          </Box>

          {/* Price */}
          <Typography
            variant="h6"
            sx={{
              mt: 1.2,
              fontWeight: 700,
              fontSize: "1.05rem",
              textAlign: "center",
              background: "linear-gradient(135deg, #0b1e2e, #1e3a8a)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
            }}
          >
            {product?.price ? `$${product.price.toFixed(2)}` : "Price N/A"}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}
