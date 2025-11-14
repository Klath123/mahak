import React, { useState } from "react";
import {
  Box,
  Grid,
  Typography,
  TextField,
  Button,
  IconButton,
  Divider,
} from "@mui/material";

import API from "../api";

import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import EmailIcon from "@mui/icons-material/Email";

export default function Footer() {
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubscribe = async () => {
    if (!email || !email.includes("@")) {
      alert("Please enter a valid email address.");
      return;
    }

    try {
      setLoading(true);
      await API.post("/newsletter", { email });
      alert("Subscribed successfully!");
      setEmail("");
    } catch (err) {
      alert(err?.response?.data?.message || "Subscription failed");
    } finally {
      setLoading(false);
    }
  };

  return (
    <Box
      sx={{
        bgcolor: "black",
        color: "white",
        py: 10,                        
        px: { xs: 4, md: 14 },       
      }}
    >
      {/* MAIN GRID */}
      <Grid 
        container 
        spacing={30}             
        justifyContent="center"
      >
        
        {/* LEFT — LOGO & SOCIAL */}
        <Grid item xs={12} md={4}>
          <Typography
            variant="h4"
            sx={{ fontWeight: "bold", mb: 4, letterSpacing: "1px" }} 
          >
            mahak
          </Typography>

          <Typography sx={{ mb: 3, fontWeight: "bold" }}>
            Follow and Connect With Us
          </Typography>

          <Box sx={{ display: "flex", gap: 2.5, mt: 2 }}>  
            {[FacebookIcon, InstagramIcon, WhatsAppIcon, EmailIcon].map(
              (Icon, i) => (
                <IconButton key={i} sx={{ color: "white", p: 1.4 }}>
                  <Icon />
                </IconButton>
              )
            )}
          </Box>
        </Grid>

        {/* MIDDLE — INFORMATION LINKS */}
        <Grid item xs={12} md={4}>
          <Typography variant="h6" sx={{ fontWeight: "bold", mb: 4 }}>
            Help & Information
          </Typography>

          <Box sx={{ display: "flex", flexDirection: "column", gap: 1.4 }}> 
            <Typography>About Us</Typography>
            <Typography>Help & Contact</Typography>
            <Typography>Collection</Typography>
          </Box>
        </Grid>

        {/* RIGHT — NEWSLETTER */}
        <Grid item xs={12} md={4}>
          <Typography variant="h6" sx={{ fontWeight: "bold", mb: 4 }}>
            Sign Up To Receive Offers & News
          </Typography>

          <TextField
            fullWidth
            placeholder="Enter your email address"
            variant="outlined"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            sx={{
              mb: 3,                               
              input: { color: "white" },
              "& .MuiOutlinedInput-root": {
                "& fieldset": { borderColor: "#666" },
                "&:hover fieldset": { borderColor: "white" },
              },
            }}
          />

          <Button
            fullWidth
            variant="outlined"
            onClick={handleSubscribe}
            disabled={loading}
            sx={{
              color: "white",
              borderColor: "white",
              py: 1.4,                              
              "&:hover": { borderColor: "white", bgcolor: "#222" },
            }}
          >
            {loading ? "SUBSCRIBING..." : "SUBSCRIBE"}
          </Button>
        </Grid>
      </Grid>

      {/* DIVIDER */}
      <Divider sx={{ my: 5, borderColor: "#333" }} />   

      {/* BOTTOM TEXT */}
      <Typography
        sx={{
          textAlign: "center",
          fontSize: "14px",
          color: "gray",
        }}
      >
        © {new Date().getFullYear()} mahak Company Limited All Rights Reserved | Terms & Conditions | Privacy Policy
      </Typography>
    </Box>
  );
}
