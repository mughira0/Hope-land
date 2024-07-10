import express from "express";
import {
  deletePackage,
  getPackageById,
  handleAddPackage,
  handleEditPackage,
  handleGetPackages,
} from "../controllers/packageController.js";
import authMiddleware from "../middleware/middleware.js";

const router = express.Router();
router.post("/packages/create", authMiddleware, handleAddPackage);
router.patch("/packages/update", authMiddleware, handleEditPackage);
router.get("/packages", authMiddleware, handleGetPackages);
router.get("/packages/:packageId", authMiddleware, getPackageById);
router.delete("/packages/:packageId", authMiddleware, deletePackage);

export default router;
