import jwt from "jsonwebtoken";

const protect = (req, res, next) => {
  const header = req.headers.authorization;

  if (!header || !header.startsWith("Bearer ")) {
    return res
      .status(401)
      .json({ message: "Not authorized, token missing" });
  }

  const token = header.split(" ")[1];

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    req.user = { id: decoded.id };
    next();
  } catch (error) {
    const message =
      error.name === "TokenExpiredError"
        ? "Not authorized, token expired"
        : "Not authorized, token invalid";
    return res.status(401).json({ message });
  }
};

export default protect;