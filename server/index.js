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
import packageRoutes from "./routes/packageRoutes.js";
import stripeRoutes from "./routes/stripeRoutes.js";
app.use("/api/auth", authRoutes);


import packageRoutes from "./routes/packageRoutes.js";
app.use("/api/admin", packageRoutes);
app.use("/api/stripe", stripeRoutes);

app.listen(port, () => {
  console.log(`server is  running on ${port}`);
  handleMongoDbConnection();
});


