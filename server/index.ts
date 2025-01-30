import express, { type Request, Response, NextFunction } from "express";
import { registerRoutes } from "./routes";
import { setupVite, serveStatic, log } from "./vite";
import cors from "cors";

// Get the Replit host from the environment
const REPLIT_HOST = process.env.REPLIT_SLUG ? 
  `${process.env.REPLIT_SLUG}.repl.co` : 
  '4537662a-f129-484e-a445-6e437c3a47c5-00-2ypdx2swfmqm1.kirk.replit.dev';

// Set Vite environment variables for host allowance
process.env.VITE_ALLOW_REPLIT_HOST = REPLIT_HOST;
process.env.VITE_FORCE_DEV_SERVER = 'true';

const app = express();

// Configure CORS
app.use(cors({
  origin: [
    `https://${REPLIT_HOST}`,
    'http://localhost:5000',
    'http://localhost:3000'
  ],
  credentials: true
}));

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use((req, res, next) => {
  const start = Date.now();
  const path = req.path;
  let capturedJsonResponse: Record<string, any> | undefined = undefined;

  const originalResJson = res.json;
  res.json = function (bodyJson, ...args) {
    capturedJsonResponse = bodyJson;
    return originalResJson.apply(res, [bodyJson, ...args]);
  };

  res.on("finish", () => {
    const duration = Date.now() - start;
    if (path.startsWith("/api")) {
      let logLine = `${req.method} ${path} ${res.statusCode} in ${duration}ms`;
      if (capturedJsonResponse) {
        logLine += ` :: ${JSON.stringify(capturedJsonResponse)}`;
      }

      if (logLine.length > 80) {
        logLine = logLine.slice(0, 79) + "…";
      }

      log(logLine);
    }
  });

  next();
});

(async () => {
  const server = registerRoutes(app);

  app.use((err: any, _req: Request, res: Response, _next: NextFunction) => {
    const status = err.status || err.statusCode || 500;
    const message = err.message || "Internal Server Error";

    res.status(status).json({ message });
    throw err;
  });

  if (app.get("env") === "development") {
    await setupVite(app, server);
  } else {
    serveStatic(app);
  }

  const PORT = process.env.PORT || 5000;

  const startServer = (retries = 3) => {
    server.listen(PORT, () => {
      log(`Server running on port ${PORT}`);
    }).on('error', (err: any) => {
      if (err.code === 'EADDRINUSE' && retries > 0) {
        log(`Port ${PORT} is busy, trying again in 1s...`);
        setTimeout(() => startServer(retries - 1), 1000);
      } else {
        log(`Failed to start server: ${err.message}`);
        process.exit(1);
      }
    });
  };

  startServer();
})();