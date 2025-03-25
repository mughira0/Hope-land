import express from "express";
import {
  handleProperties
} from "../controllers/sellerController.js";
import authMiddleware from "../middleware/middleware.js";

const router = express.Router();
router.post("/list-properties",authMiddleware, handleProperties);
export default router;
