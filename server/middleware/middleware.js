import jwt from "jsonwebtoken";
import userModel from "../models/userModel.js";

const authMiddleware = async (req, res, next) => {
  const token = req.header("Authorization");

  if (!token) {
    return res.status(401).json({ message: "No token, authorization denied" });
  }

  try {
    const decoded = jwt.verify(token.split(" ")[1], process.env.TOKEN_KEY);
    console.log(decoded);
    const user = await userModel.findById(decoded.userID);

    console.log(user);
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
export default authMiddleware;
