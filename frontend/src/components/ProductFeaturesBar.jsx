import React from "react";
import { Box, Grid, Typography } from "@mui/material";

import VerifiedIcon from "@mui/icons-material/Verified";
import Inventory2OutlinedIcon from "@mui/icons-material/Inventory2Outlined";
import LocalShippingOutlinedIcon from "@mui/icons-material/LocalShippingOutlined";

export default function ProductFeaturesBar() {
  const features = [
    {
      icon: <VerifiedIcon sx={{ fontSize: 40, color: "white" }} />,
      title: "100% ORIGINAL",
      desc: "All products are original and go through strict quality check.",
    },
    {
      icon: <Inventory2OutlinedIcon sx={{ fontSize: 40, color: "white" }} />,
      title: "7 DAY RETURN",
      desc: "Use our hassle-free return method anytime.",
    },
    {
      icon: <LocalShippingOutlinedIcon sx={{ fontSize: 40, color: "white" }} />,
      title: "FREE SHIPPING",
      desc: "Free & fast delivery across India.",
    },
  ];

  return (
    <Box
      sx={{
        width: "100%",
        py: 6,
        color: "white",
        backgroundImage: `
          url("https://www.transparenttextures.com/patterns/clean-textile.png"),
          linear-gradient(135deg, #0b1e2e, #15354c, #0b1e2e)
        `,
        backgroundSize: "100px, cover",
        backgroundBlendMode: "overlay",
      }}
    >
      <Box
        sx={{
          maxWidth: "1200px",
          mx: "auto",
          px: { xs: 2, md: 4 },
        }}
      >
        <Grid container spacing={5}>
          {features.map((item, index) => (
            <Grid
              item
              xs={12}
              md={4}
              key={index}
              sx={{
                display: "flex",
                gap: 2,
                alignItems: { xs: "flex-start", md: "center" },
              }}
            >
              <Box>{item.icon}</Box>

              <Box>
                <Typography
                  variant="subtitle1"
                  sx={{
                    fontWeight: 700,
                    color: "white",
                    textTransform: "uppercase",
                    letterSpacing: "0.5px",
                  }}
                >
                  {item.title}
                </Typography>

                <Typography
                  variant="body2"
                  sx={{
                    color: "rgba(255,255,255,0.85)",
                    mt: 0.5,
                    lineHeight: 1.6,
                    maxWidth: "90%",
                  }}
                >
                  {item.desc}
                </Typography>
              </Box>
            </Grid>
          ))}
        </Grid>
      </Box>
    </Box>
  );
}
