import express from "express";
import path from "path";
import cors from "cors";
import { log } from "./vite";
import router from "./routes";
import { fileURLToPath } from "url";

const app = express();

// Fix __dirname for ES Modules
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Set Replit host
const REPLIT_HOST = process.env.REPL_SLUG;
let REPLIT_DOMAIN: string | undefined;
try {
  REPLIT_DOMAIN = process.env.REPLIT_DOMAINS ? process.env.REPLIT_DOMAINS.replace(/["[\]]/g, '') : undefined;
} catch (error) {
  console.warn("Failed to parse REPLIT_DOMAINS, continuing without it:", error);
}

// CORS Configuration
const corsOptions = {
  origin: function(origin: string | undefined, callback: (err: Error | null, allow?: boolean) => void) {
    const allowedOrigins = [
      REPLIT_DOMAIN ? `https://${REPLIT_DOMAIN}` : undefined,
      `https://${REPLIT_HOST}`,
      `http://${REPLIT_HOST}`,
      "http://localhost:5000",
      "http://0.0.0.0:5000",
      "https://dap00.app.n8n.cloud"
    ].filter(Boolean) as string[];

    if (!origin || allowedOrigins.indexOf(origin) !== -1) {
      callback(null, true);
    } else {
      callback(new Error('Not allowed by CORS'));
    }
  },
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
  log(`📨 ${req.method} ${req.url}`, "express");
  if (Object.keys(req.body).length > 0) {
    log(`📦 Request Body: ${JSON.stringify(req.body)}`, "express");
  }
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
    host: REPLIT_HOST,
    domain: REPLIT_DOMAIN
  });
});

// Start the backend
const PORT = Number(process.env.PORT) || 3000;
app.listen(PORT, "0.0.0.0", () => {
  log(`🚀 Backend server running on port ${PORT}`, "express");
  log(`🔗 CORS enabled for ${REPLIT_DOMAIN || REPLIT_HOST}`, "express");
  log(`💓 Health check available at /health`, "express");
});

export default app;