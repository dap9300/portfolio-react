// server/backend.ts
import express from "express";
import cors from "cors";
import router from "./routes";

const app = express();
const REPLIT_HOST = process.env.REPL_SLUG || "4537662a-f129-484e-a445-6e437c3a47c5-00-2ypdx2swfmqm1.kirk.replit.dev";

const corsOptions = {
  origin: [
    `https://${REPLIT_HOST}`,
    `http://${REPLIT_HOST}`,
    "http://localhost:5000",
    "http://0.0.0.0:5000",
    `https://${REPLIT_HOST}:8080`,
    "https://dap00.app.n8n.cloud"
  ],
  credentials: true,
  methods: ["GET", "POST", "PUT", "DELETE", "OPTIONS"],
  allowedHeaders: ["Content-Type", "Authorization"]
};

app.use(cors(corsOptions));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// Logging middleware
app.use((req, res, next) => {
  console.log(`[${new Date().toISOString()}] ${req.method} ${req.url}`);
  console.log("Request Body:", req.body);
  next();
});

// API Routes
app.use("/api", router);

// Health check endpoint
app.get("/health", (_, res) => {
  res.json({
    status: "ok",
    service: "backend",
    timestamp: new Date().toISOString(),
    host: REPLIT_HOST
  });
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, "0.0.0.0", () => {
  console.log(`🚀 Backend API server running on port ${PORT}`);
});

export default app;