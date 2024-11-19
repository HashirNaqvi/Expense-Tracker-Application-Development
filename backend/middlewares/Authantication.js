const jwt = require("jsonwebtoken");

const isAuthenticated = (req, res, next) => {
  // Get the token from the Authorization header
  const token = req.headers?.authorization?.split(" ")[1];

  // Check if token is provided
  if (!token) {
    return res.status(401).json({ message: "No token provided" });
  }

  // Verify the token
  jwt.verify(token, "HashirNaqviKey", (err, decoded) => {
    if (err) {
      if (err.name === "TokenExpiredError") {
        // Token has expired
        return res
          .status(401)
          .json({ message: "Token expired, please log in again" });
      } else {
        // Other token-related errors
        return res.status(401).json({ message: "Invalid token" });
      }
    }

    // If token is valid, save user ID to request and proceed
    req.user = decoded.id;
    next();
  });
};

module.exports = isAuthenticated;
