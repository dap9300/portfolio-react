import express, { type Request, Response, NextFunction } from "express";
import { registerRoutes } from "./routes";
import { setupVite, serveStatic, log } from "./vite";
import cors from "cors";

// Get the Replit host from the environment
const REPLIT_HOST = process.env.REPL_SLUG || '4537662a-f129-484e-a445-6e437c3a47c5-00-2ypdx2swfmqm1.kirk.replit.dev';

// Configure environment variables for Vite
process.env.VITE_ALLOW_REPLIT_HOST = REPLIT_HOST;
process.env.VITE_DEV_SERVER_URL = `https://${REPLIT_HOST}`;
process.env.HOST = '0.0.0.0';

const app = express();

// Configure CORS with expanded origins
const corsOptions = {
  origin: [
    `https://${REPLIT_HOST}`,
    `http://${REPLIT_HOST}`,
    'http://localhost:5000',
    'http://0.0.0.0:5000'
  ],
  credentials: true,
  methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'],
  allowedHeaders: ['Content-Type', 'Authorization']
};

app.use(cors(corsOptions));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// Logging middleware
app.use((req, res, next) => {
  const start = Date.now();
  res.on("finish", () => {
    const duration = Date.now() - start;
    // Only log errors (4xx and 5xx status codes)
    if (res.statusCode >= 400) {
      log(`ERROR: ${req.method} ${req.path} ${res.statusCode} in ${duration}ms`);
    }
  });
  next();
});

(async () => {
  const server = registerRoutes(app);

  // Error handling middleware
  app.use((err: any, _req: Request, res: Response, _next: NextFunction) => {
    console.error('Error:', err);
    const status = err.status || err.statusCode || 500;
    const message = err.message || "Internal Server Error";
    res.status(status).json({ message });
  });

  if (process.env.NODE_ENV !== 'production') {
    await setupVite(app, server);
  } else {
    serveStatic(app);
  }

  const PORT = process.env.PORT || 5000;

  server.listen(Number(PORT), '0.0.0.0', () => {
    log(`Server running on port ${PORT}`);
    log(`Replit host: ${REPLIT_HOST}`);
  });
})();