import React, { useState, useEffect } from "react";
import {
  Box,
  Button,
  TextField,
  Rating,
  Typography,
  Alert,
  useTheme,
} from "@mui/material";
import API from "../api";

export default function AddReview({ slug, onReviewAdded }) {
  const theme = useTheme();
  const darkBlue = "#0b1e2e";

  const [rating, setRating] = useState(0);
  const [comment, setComment] = useState("");
  const [username, setUsername] = useState("");

  const [loading, setLoading] = useState(false);
  const [errorMsg, setErrorMsg] = useState("");
  const [successMsg, setSuccessMsg] = useState("");
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setErrorMsg("");
    setSuccessMsg("");

    if (!rating) return setErrorMsg("Please select a rating.");
    if (!comment.trim()) return setErrorMsg("Please write a comment.");

    setLoading(true);

    try {
      const res = await API.post(`/products/${slug}/reviews`, {
        user: username || "Guest",
        rating,
        comment,
      });

      setSuccessMsg("Review added successfully!");
      setRating(0);
      setComment("");
      setUsername("");

      if (onReviewAdded) onReviewAdded(res.data);
    } catch (error) {
      console.error("Review submission error:", error);
      setErrorMsg(
        error.response?.data?.message || "Something went wrong. Try again."
      );
    }

    setLoading(false);
  };

  return (
    <Box
      sx={{
        mt: 6,
        mb: 6,
        p: 4,
        borderRadius: "18px",
        backdropFilter: "blur(10px)",
        background: "rgba(255, 255, 255, 0.9)",
        border: "1px solid rgba(11,30,46,0.18)",
        boxShadow: "0 8px 22px rgba(0,0,0,0.12)",
        transition: "all 0.7s ease",
        opacity: mounted ? 1 : 0,
        transform: mounted ? "translateY(0)" : "translateY(20px)",
      }}
    >
      {/* Title */}
      <Typography
        variant="h6"
        sx={{
          fontWeight: 700,
          mb: 2,
          color: darkBlue,
          fontFamily: "'Inter', sans-serif",
        }}
      >
        Add a Review
      </Typography>

      {errorMsg && (
        <Alert severity="error" sx={{ mb: 2 }}>
          {errorMsg}
        </Alert>
      )}

      {successMsg && (
        <Alert severity="success" sx={{ mb: 2 }}>
          {successMsg}
        </Alert>
      )}

      <form onSubmit={handleSubmit}>
        {/* Username */}
        <TextField
          label="Your Name (optional)"
          fullWidth
          size="small"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          sx={{
            mb: 2,
            "& .MuiOutlinedInput-root": {
              borderRadius: "10px",
            },
            // TEXT COLOR
            "& .MuiInputBase-input": {
              color: darkBlue,
            },
            // LABEL COLOR
            "& .MuiInputLabel-root": {
              color: darkBlue,
            },
            "& label.Mui-focused": {
              color: darkBlue,
            },
          }}
        />

        {/* Rating */}
        <Box sx={{ display: "flex", alignItems: "center", mb: 2 }}>
          <Typography
            sx={{
              mr: 2,
              fontWeight: 600,
              color: darkBlue,
            }}
          >
            Rating:
          </Typography>
          <Rating
            value={rating}
            onChange={(e, newValue) => setRating(newValue)}
            size="large"
          />
        </Box>

        {/* Comment */}
        <TextField
          label="Write your review..."
          fullWidth
          multiline
          minRows={3}
          value={comment}
          onChange={(e) => setComment(e.target.value)}
          sx={{
            mb: 3,
            "& .MuiOutlinedInput-root": {
              borderRadius: "12px",
            },
            "& .MuiInputBase-input": {
              color: darkBlue,
            },
            "& .MuiInputLabel-root": {
              color: darkBlue,
            },
            "& label.Mui-focused": {
              color: darkBlue,
            },
          }}
        />

        {/* Submit Button */}
        <Button
          type="submit"
          variant="contained"
          disabled={loading}
          sx={{
            background: darkBlue,
            px: 4,
            py: 1.4,
            borderRadius: "12px",
            textTransform: "none",
            fontWeight: 600,
            boxShadow: "0 6px 18px rgba(0,0,0,0.18)",
            transition: "0.3s ease",
            "&:hover": {
              background: "#102a40",
            },
          }}
        >
          {loading ? "Submitting..." : "Submit Review"}
        </Button>
      </form>
    </Box>
  );
}
