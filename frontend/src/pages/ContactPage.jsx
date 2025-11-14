import React from "react";
import { Box } from "@mui/material";

import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import ContactSection from "../components/ContactSection";

export default function ContactPage() {
  return (
    <Box sx={{ width: "100%", minHeight: "100vh", bgcolor: "white" }}>
      
      {/* NAVBAR WITH BLACK TEXT */}
      <Navbar textColor="black" />

      {/* Divider */}
      <Box
        sx={{
          width: "100%",
          height: "1px",
          backgroundColor: "rgba(0,0,0,0.1)",
          mb: 4,
        }}
      />

      <ContactSection />

      <Footer />
    </Box>
  );
}
