import express from "express";
import dotenv from "dotenv";
import cors from "cors";

import { error } from "./middleware/error.js";
import authRouter from "./routes/authRouter.js";

export const app = express();

app.use(express.json({ limit: "50mb" }));
app.use(express.urlencoded({ extended: true }));
app.use(cors());

// routes
app.use("api/auth", authRouter);

if (process.env.NODE_ENV != "production") {
  dotenv.config({ path: "./config/config.env" });
}

// error handling middleware
app.use(error);
