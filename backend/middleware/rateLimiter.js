import rateLimit from "express-rate-limit";

const WINDOW_MS = 15 * 60 * 1000;

export const apiLimiter = rateLimit({
  windowMs: WINDOW_MS,
  limit: 100,
  standardHeaders: true,
  legacyHeaders: false,
  message: { message: "Too many requests, please try again in 15 minutes" },
});

export const loginLimiter = rateLimit({
  windowMs: WINDOW_MS,
  limit: 5,
  standardHeaders: true,
  legacyHeaders: false,
  message: {
    message: "Too many login attempts, please try again in 15 minutes",
  },
});