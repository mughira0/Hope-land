const jwt = require("jsonwebtoken");
import userModel from "../models/userModel";

const authMiddleware = async (req, res, next) => {
  // Get token from request header
  const token = req.header("Authorization");

  if (!token) {
    return res.status(401).json({ message: "No token, authorization denied" });
  }

  try {
    // Verify token
    const decoded = jwt.verify(token.split(" ")[1], process.env.JWT_SECRET); // Extract token part after 'Bearer'

    // Fetch user from database
    const user = await userModel.findById(decoded.id);

    if (!user) {
      throw new Error();
    }

    // Attach user object to request
    req.user = user;
    next();
  } catch (err) {
    console.error(err.message);
    res.status(401).json({ message: "Token is not valid" });
  }
};

module.exports = authMiddleware;
