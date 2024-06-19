import cors from "cors";
import dotenv from "dotenv";
import express from "express";
import handleMongoDbConnection from "./db/db.js";
const app = express();
dotenv.config();
app.use(express.json());
app.use(cors());
const port = process.env.PORT || 8000;

import authRoutes from "./routes/authRoutes.js";
import courseRoutes from "./routes/courseRoute.js";
app.use("/api/auth", authRoutes);
app.use("/api/", courseRoutes);
app.listen(port, () => {
  console.log(`server is  running on ${port}`);
  handleMongoDbConnection();
});
