import express from "express";
import cors from "cors";
import helmet from "helmet";
import routes from "./routes";
import {connectDB} from "./config/db";
import dotenv from "dotenv";
dotenv.config();

const app = express();

// Connect DB BEFORE routes
connectDB();

// Middlewares
app.use(cors());
app.use(helmet());
app.use(express.json());

// Routes
app.use("/api", routes);

// Health check
app.get("/health", (_req, res) => {
  res.status(200).json({
    status: "ok",
    service: "SubhVaani Backend",
    db: "connected",
    timestamp: new Date().toISOString(),
  });
});

// Server
const PORT = process.env.PORT || 4000;
app.listen(PORT, () => {
  console.log(`🚀 SubhVaani backend running on port ${PORT}`);
});
