import express from "express";
import { register, login } from "../controllers/authController.js";
import { loginLimiter } from "../middleware/rateLimiter.js";
import protect from "../middleware/authMiddleware.js";

const router = express.Router();

router.post("/register", register);
router.post("/login", loginLimiter, login);
router.get("/me", protect, (req, res) => {
  res.status(200).json({ user: req.user });
});

export default router;