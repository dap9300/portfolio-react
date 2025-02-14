// server/index.ts
import express, { type Request, Response, NextFunction } from "express";
import { registerRoutes } from "./routes";
import { setupVite, serveStatic, log } from "./vite";
import cors from "cors";
import http from "http";

// Get the Replit host from the environment
const REPLIT_HOST = process.env.REPL_SLUG || "4537662a-f129-484e-a445-6e437c3a47c5-00-2ypdx2swfmqm1.kirk.replit.dev";

// Configure environment variables for Vite
process.env.VITE_ALLOW_REPLIT_HOST = REPLIT_HOST;
process.env.VITE_DEV_SERVER_URL = `https://${REPLIT_HOST}`;
process.env.HOST = "0.0.0.0";

const app = express();

// Configure CORS
const corsOptions = {
  origin: [
    `https://${REPLIT_HOST}`,
    "http://localhost:5000",
    "http://0.0.0.0:5000",
  ],
  credentials: true,
  methods: ["GET", "POST", "PUT", "DELETE", "OPTIONS"],
  allowedHeaders: ["Content-Type", "Authorization"],
};

app.use(cors(corsOptions));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// Create an HTTP server
const server = http.createServer(app);

// Setup Vite in development mode
async function startServer() {
    await setupVite(app, server);

    // Register API routes
    registerRoutes(app);

    // Error Handling Middleware
    app.use((err: any, req: Request, res: Response, next: NextFunction) => {
      console.error("Detailed error:", {
        message: err.message,
        stack: err.stack,
        body: req.body,
      });
      res.status(err.status || 500).json({ message: err.message || "Internal Server Error" });
    });

    // Start Server
    const PORT = process.env.PORT || 5000;
    server.listen(Number(PORT), "0.0.0.0", () => {
      log(`Frontend server running on port ${PORT}`);
      log(`Replit host: ${REPLIT_HOST}`);
    });
}


startServer();