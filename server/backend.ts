// server/backend.ts
import express from "express";
import path from "path";
import cors from "cors";
import { log } from "./vite";
import router from "./routes";
import { fileURLToPath } from "url"; // Fix for __dirname in ES module

const app = express();

// Fix __dirname for ES Modules
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Set Replit host
const REPLIT_HOST = process.env.REPL_SLUG || "4537662a-f129-484e-a445-6e437c3a47c5-00-2ypdx2swfmqm1.kirk.replit.dev";

// CORS Configuration
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

// Apply middleware
app.use(cors(corsOptions));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// Log all requests
app.use((req, res, next) => {
  console.log(`[${new Date().toISOString()}] ${req.method} ${req.url}`);
  console.log("Request Body:", req.body);
  next();
});

// **Serve frontend from /dist/public**
const frontendPath = path.join(__dirname, "../dist/public");
console.log("📂 Serving frontend from:", frontendPath);
app.use(express.static(frontendPath));

// **Serve index.html for React frontend for all unknown routes**
app.get("*", (req, res) => {
  res.sendFile(path.join(frontendPath, "index.html"), (err) => {
    if (err) {
      console.error("Failed to serve frontend:", err);
      res.status(500).send("Failed to load frontend");
    }
  });
});

// **API Routes**
app.use("/api", router);

// **Health check endpoint**
app.get("/health", (_, res) => {
  res.json({
    status: "ok",
    service: "backend",
    timestamp: new Date().toISOString(),
    host: REPLIT_HOST
  });
});

// **Start the backend**
const PORT = process.env.PORT || 3000;
app.listen(PORT, "0.0.0.0", () => {
  log(`🚀 Backend server running on port ${PORT}`, "express");
  log(`📡 Serving frontend from ${frontendPath}`, "express");
  log(`🔗 CORS enabled for React frontend & n8n`, "express");
  log(`💓 Health check available at /health`, "express");
});

export default app;
