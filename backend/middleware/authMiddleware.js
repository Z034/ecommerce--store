import jwt from "jsonwebtoken";

const verifyGoogleToken = async (token) => {
  const url = `https://oauth2.googleapis.com/tokeninfo?access_token=${encodeURIComponent(
    token
  )}`;
  const response = await fetch(url);
  if (!response.ok) return null;

  const info = await response.json();
  if (info.aud !== process.env.GOOGLE_CLIENT_ID) return null;

  return { provider: "google", email: info.email };
};

const protect = async (req, res, next) => {
  const header = req.headers.authorization;

  if (!header || !header.startsWith("Bearer ")) {
    return res
      .status(401)
      .json({ message: "Not authorized, token missing" });
  }

  const token = header.split(" ")[1];

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    req.user = { provider: "jwt", id: decoded.id };
    return next();
  } catch (error) {
    if (error.name === "TokenExpiredError") {
      return res
        .status(401)
        .json({ message: "Not authorized, token expired" });
    }
  }

  if (process.env.GOOGLE_CLIENT_ID) {
    try {
      const googleUser = await verifyGoogleToken(token);
      if (googleUser) {
        req.user = googleUser;
        return next();
      }
    } catch (error) {
      console.error("Google token check failed:", error.message);
    }
  }

  return res.status(401).json({ message: "Not authorized, token invalid" });
};

export default protect;