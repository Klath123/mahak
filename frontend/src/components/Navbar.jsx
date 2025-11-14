import React from "react";
import { Box, Typography, Button, Container } from "@mui/material";
import { Link, useLocation } from "react-router-dom";

const Navbar = ({ textColor = "white" }) => {
  const navItems = [
    { name: "Collections", path: "/collections" },
    { name: "Contact Us", path: "/contact" },
  ];

  return (
    <Container maxWidth="lg">
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          py: 0.5,
        }}
      >
        {/* LOGO */}
        <Typography
          variant="h5"
          sx={{
            fontFamily: "'Playfair Display', serif",
            fontWeight: 700,
            color: textColor,
            textDecoration: "none",
            transition: "0.3s ease",
          }}
          component={Link}
          to="/"
        >
          mahak
        </Typography>

        {/* NAV LINKS */}
        <Box sx={{ display: { xs: "none", md: "flex" }, gap: 1 }}>
          {navItems.map((item) => (
            <Button
              key={item.name}
              component={Link}
              to={item.path}
              sx={{
                color: textColor,
                textTransform: "none",
                fontFamily: "Inter, sans-serif",
                opacity: 0.9,
                transition: "0.3s ease",
                "&:hover": { opacity: 1 },
              }}
            >
              {item.name}
            </Button>
          ))}
        </Box>
      </Box>
    </Container>
  );
};

export default Navbar;
