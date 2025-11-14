import express from "express";
import Newsletter from "../models/Newsletter.js";

const router = express.Router();

router.post("/", async (req, res) => {
  const { email } = req.body;

  if (!email)
    return res.status(400).json({ message: "Email is required" });

  try {
    // Check for duplicates
    const exists = await Newsletter.findOne({ email });
    if (exists)
      return res.status(409).json({ message: "Email already subscribed" });

    const entry = await Newsletter.create({ email });

    res.status(201).json({ message: "Subscribed successfully", entry });
  } catch (err) {
    res.status(500).json({ message: "Server error", error: err.message });
  }
});

export default router;
