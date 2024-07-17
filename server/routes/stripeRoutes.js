import express from "express";
import {
  handlePaymentStatus,
  handleStripePaymentIntent,
} from "../controllers/stripeController.js";
import authMiddleware from "../middleware/middleware.js";

const router = express.Router();
router.post("/subscribe", authMiddleware, handleStripePaymentIntent);
router.get("/subscribe/status/:paymentId", authMiddleware, handlePaymentStatus);

export default router;
