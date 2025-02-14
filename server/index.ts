import express, { type Request, Response, NextFunction } from "express";
import { registerRoutes } from "./routes";
import { setupVite, serveStatic, log } from "./vite";
import cors from "cors";
import http from "http";

// Get the Replit host from the environment
const REPLIT_HOST = process.env.REPL_SLUG;
let REPLIT_DOMAIN: string | undefined;
try {
  REPLIT_DOMAIN = process.env.REPLIT_DOMAINS ? process.env.REPLIT_DOMAINS.replace(/["[\]]/g, '') : undefined;
} catch (error) {
  console.warn("Failed to parse REPLIT_DOMAINS, continuing without it:", error);
}

// Configure environment variables for Vite
process.env.VITE_ALLOW_REPLIT_HOST = REPLIT_DOMAIN || REPLIT_HOST;
process.env.VITE_DEV_SERVER_URL = `https://${REPLIT_DOMAIN || REPLIT_HOST}`;
process.env.HOST = "0.0.0.0";

const app = express();

// Configure CORS
const corsOptions = {
  origin: function(origin: string | undefined, callback: (err: Error | null, allow?: boolean) => void) {
    const allowedOrigins = [
      REPLIT_DOMAIN ? `https://${REPLIT_DOMAIN}` : undefined,
      `https://${REPLIT_HOST}`,
      `http://${REPLIT_HOST}`,
      "http://localhost:5000",
      "http://0.0.0.0:5000",
    ].filter(Boolean) as string[];

    if (!origin || allowedOrigins.indexOf(origin) !== -1) {
      callback(null, true);
    } else {
      callback(new Error('Not allowed by CORS'));
    }
  },
  credentials: true,
  methods: ["GET", "POST", "PUT", "DELETE", "OPTIONS"],
  allowedHeaders: ["Content-Type", "Authorization"],
};

app.use(cors(corsOptions));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// Create an HTTP server
const server = http.createServer(app);

// Register API routes
registerRoutes(app);

// Logging middleware
app.use((req, res, next) => {
  log(`📨 ${req.method} request to ${req.path}`, "express");
  if (Object.keys(req.body).length > 0) {
    log(`📦 Request Body: ${JSON.stringify(req.body)}`, "express");
  }
  next();
});

// Error Handling Middleware
app.use((err: any, req: Request, res: Response, next: NextFunction) => {
  console.error("Detailed error:", {
    message: err.message,
    stack: err.stack,
    body: req.body,
  });
  res.status(err.status || 500).json({ message: err.message || "Internal Server Error" });
});

// Setup Vite in development mode
if (process.env.NODE_ENV !== 'production') {
  setupVite(app, server).catch((err) => {
    console.error("Failed to setup Vite:", err);
    process.exit(1);
  });
} else {
  // Serve static files in production
  serveStatic(app);
}

// Start Server
const PORT = process.env.PORT || 5000;
server.listen(Number(PORT), "0.0.0.0", () => {
  log(`Frontend server running on port ${PORT}`, "express");
  log(`Using host: ${REPLIT_DOMAIN || REPLIT_HOST}`, "express");
});
