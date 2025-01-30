import express, { type Request, Response, NextFunction } from "express";
import { registerRoutes } from "./routes";
import { setupVite, serveStatic, log } from "./vite";
import cors from "cors";

// Get the Replit host from the environment
const REPLIT_HOST = process.env.REPLIT_SLUG ? 
  `${process.env.REPLIT_SLUG}.repl.co` : 
  process.env.REPL_SLUG || 'localhost:5000';

// Configure Vite environment
process.env.VITE_ALLOW_REPLIT_HOST = REPLIT_HOST;
process.env.VITE_FORCE_DEV_SERVER = 'true';
process.env.HOST = '0.0.0.0';

const app = express();

// Configure CORS with expanded origins
app.use(cors({
  origin: [
    `https://${REPLIT_HOST}`,
    `http://${REPLIT_HOST}`,
    'http://localhost:5000',
    'http://localhost:3000',
    'http://0.0.0.0:5000'
  ],
  credentials: true,
  methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'],
  allowedHeaders: ['Content-Type', 'Authorization']
}));

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// Logging middleware
app.use((req, res, next) => {
  const start = Date.now();
  const path = req.path;

  res.on("finish", () => {
    const duration = Date.now() - start;
    log(`${req.method} ${path} ${res.statusCode} in ${duration}ms`);
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

  if (process.env.NODE_ENV !== "production") {
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