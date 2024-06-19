import express from "express";
import {
  handleLoginUp,
  handleLogout,
  handleSignUp,
} from "../controllers/authControllers.js";

const router = express.Router();
router.post("/login", handleLoginUp);
router.post("/signup", handleSignUp);
router.post("/logout", handleLogout);
export default router;
